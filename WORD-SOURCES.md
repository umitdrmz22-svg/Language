# Word Atlas data and photographs

The six offline word packs in app/src/main/assets/words are distributed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Each pack contains 10,000 distinct target headwords. The two-letter target code comes first in each filename. A headword can appear in both dictionaries for the same target language.

The source is the FreeDict + WikDict dictionary collection, maintained and published by Karl Bartel, edition 2025.11.21. The TEI headers credit Wiktionary contributors and DBnary and identify [CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/legalcode) as the source licence. [WikDict](https://www.wikdict.com/), [FreeDict](https://freedict.org/), [Wiktionary](https://www.wiktionary.org/) and [DBnary](https://kaiko.getalp.org/about-dbnary/).

| Pair | Source files |
| --- | --- |
| Deutsch / English | [Deutsch–English](https://download.wikdict.com/dictionaries/tei/recommended/deu-eng.tei), [English–Deutsch](https://download.wikdict.com/dictionaries/tei/recommended/eng-deu.tei) |
| Deutsch / Español | [Deutsch–Español](https://download.wikdict.com/dictionaries/tei/recommended/deu-spa.tei), [Español–Deutsch](https://download.wikdict.com/dictionaries/tei/recommended/spa-deu.tei) |
| English / Español | [English–Español](https://download.wikdict.com/dictionaries/tei/recommended/eng-spa.tei), [Español–English](https://download.wikdict.com/dictionaries/tei/recommended/spa-eng.tei) |

Language filters single-word entries, prioritises common words, merges senses, retains selected grammatical information and uses explicit reverse equivalents to fill gaps. The first entries also include authored introductory translations. Frequency ranking uses [wordfreq 3.1.1, Robyn Speer and contributors](https://github.com/rspeer/wordfreq). Its data is under CC BY-SA 4.0. The build only uses the rankings during selection.

To rebuild, place all six edition-matched TEI files in one directory, install lxml and wordfreq 3.1.1, then run the following command. The recommended download directory may change edition over time.

    python tools/build_wordpacks.py INPUT_DIRECTORY app/src/main/assets/words

## Home photographs

The following CC0 photographs were resized and converted to WebP for offline use. Each file page identifies its photographer and dedication.

- [Madrid – Estación de Gran Vía](https://commons.wikimedia.org/wiki/File:Madrid_-_Estaci%C3%B3n_de_Gran_V%C3%ADa.jpg)
- [U Bahn Station Alexanderplatz Berlin](https://commons.wikimedia.org/wiki/File:U_Bahn_Station_Alexanderplatz_Berlin.jpg)
- [South Kensington tube station entrance](https://commons.wikimedia.org/wiki/File:South_Kensington_tube_station_entrance.jpg)
