"""Build the six offline packs from WikDict 2025.11.21 TEI files.

Usage: python build_wordpacks.py INPUT_DIRECTORY OUTPUT_DIRECTORY
Build dependencies: lxml, wordfreq==3.1.1 (selection order only).
Each key is a target-language headword with glosses in the learner's source language.
"""
import gzip
import itertools
import json
import re
import sys
import unicodedata
from collections import defaultdict
from functools import lru_cache
from pathlib import Path

from lxml import etree
from wordfreq import zipf_frequency

LANGUAGES = {"en": "eng", "de": "deu", "es": "spa"}
PARTS = {"n", "v", "adj", "adv", "preposition", "conjunction", "pronoun", "interjection", "article", "numeral", "determiner"}
LIMIT = 10_000
source, output = map(Path, sys.argv[1:])
output.mkdir(exist_ok=True, parents=True)


def clean(value):
    return " ".join(unicodedata.normalize("NFC", value or "").split())


def single(value):
    return 1 < len(value) <= 42 and value.isalpha()


@lru_cache(maxsize=300000)
def frequency(word, lang):
    return zipf_frequency(word, lang)


def read(path):
    entries = defaultdict(list)
    namespace = "{http://www.tei-c.org/ns/1.0}"
    for _, el in etree.iterparse(str(path), events=("end",), tag=namespace+"entry", no_network=True):
        head = clean(el.findtext("{*}form/{*}orth"))
        pos = clean(el.findtext("{*}gramGrp/{*}pos"))
        if single(head) and not head.isupper() and pos in PARTS:
            ipa = clean(el.findtext("{*}form/{*}pron"))
            gender = clean(el.findtext("{*}gramGrp/{*}gen"))
            forms = list(dict.fromkeys(clean(x.text) for x in el.findall("{*}form/{*}form/{*}orth")
                         if single(clean(x.text)) and clean(x.text) != head))[:4]
            for sense in el.findall("{*}sense"):
                tr = list(dict.fromkeys(clean(x.text) for x in sense.findall("{*}cit[@type='trans']/{*}quote")
                          if 0 < len(clean(x.text)) < 55 and not any(c in clean(x.text) for c in '{}[]|<>\\')))
                gloss = clean(sense.findtext("{*}sense/{*}def"))
                gloss = gloss.split("|")[-1].strip()
                if len(gloss)>250 or any(c in gloss for c in '{}[]<>'):
                    gloss = ""
                if tr and not re.search(r'Nachname|Familienname|[Ss]urname|[Aa]pellido',gloss):
                    entries[head].append((pos,gender,ipa,forms,tr[:5],gloss))
        el.clear()
        while el.getprevious() is not None:
            del el.getparent()[0]
    return entries


def build(target, known, direct, reverse):
    # Fill gaps only from explicit translations of the same language pair.
    candidates = dict(direct)
    for src, senses in reverse.items():
        for pos,_,_,_,translations,_ in senses:
            for word in translations:
                if single(word) and not word.isupper() and word not in direct:
                    candidates.setdefault(word,[]).append((pos,"","",[],[src],""))
    first_words = []
    for line in Path(__file__).with_name("core_words.tsv").read_text().splitlines():
        pos, en, de, es = line.split("\t")
        terms = {"en":en, "de":de, "es":es}
        word = terms[target]
        if not single(word): continue
        first_words.append(word)
        current = candidates.get(word, [])
        old = next((s for s in current if s[0]==pos and terms[known] in s[4]), None)
        preferred = (pos,old[1] if old else "",old[2] if old else "",old[3] if old else [],[terms[known]],old[5] if old else "")
        candidates[word] = [preferred]+current
    priority = {w:i for i,w in enumerate(first_words)}
    seen = set()
    rows = []
    for word in sorted(candidates, key=lambda w:(priority.get(w,LIMIT),-frequency(w,target),w.casefold(),w)):
        key = word.lower()
        if key in seen: continue
        senses = candidates[word]
        def score(s):
            pos,gender,_,_,translations,gloss = s
            mutual = any(any(word in v[4] for v in reverse.get(q,[])) for q in translations)
            return (mutual, any(q.lower()!=key for q in translations), bool(gloss), bool(gender))
        ranked = senses if word in priority else sorted(senses, key=score, reverse=True)
        pos, gender, ipa, forms, _, _ = ranked[0]
        meanings = []
        for typ,_,_,_,translations,definition in ranked:
            if typ != pos: continue
            if translations not in [m[0] for m in meanings]:
                meanings.append([translations,definition])
            if len(meanings)==3: break
        rows.append([word,pos,gender,ipa,forms,meanings])
        seen.add(key)
        if len(rows)==LIMIT: break
    assert len(rows)==LIMIT,(target,known,len(rows))
    with (output/(target+known+".json.gz")).open("wb") as raw:
        with gzip.GzipFile(filename="",fileobj=raw,mode="wb",mtime=0) as gz:
            gz.write(json.dumps(rows,ensure_ascii=False,separators=(",",":")).encode())
    print(target,known,len(rows),flush=True)


for a,b in itertools.combinations(LANGUAGES,2):
    pair = {(x,y):read(source/f"{LANGUAGES[x]}-{LANGUAGES[y]}.tei") for x,y in ((a,b),(b,a))}
    for x,y in pair:
        build(x,y,pair[x,y],pair[y,x])
