"use strict";
// The direction is target → explanation. The stored word is the stable identity.
const atlas = {
  key: "",
  rows: null,
  index: new Map(),
  error: false,
  query: "",
  part: "",
  deck: "",
  scope: "all",
  limit: 25,
  playing: false,
};
const fold = (s) =>
  s
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss");
const entryPOS = (row) =>
  ["n", "v", "adj", "adv"].includes(row[1]) ? row[1] : "otherClass";
const translations = (row) => row[5].flatMap((s) => s[0]);
const atlasStudy = () =>
  (track().dictionary ??= { saved: {}, progress: {}, round: null });
const lexDue = (k) => (atlasStudy().progress[k]?.due ?? Infinity) <= Date.now();
const lexCount = (n) => n.toLocaleString(ui);
function ensureAtlas() {
  const key = state.to + state.from;
  if (atlas.key === key) return;
  Object.assign(atlas, {
    key,
    rows: null,
    index: new Map(),
    error: false,
    query: "",
    part: "",
    deck: "",
    scope: "all",
    limit: 25,
    playing: false,
  });
  fetch("words/" + key + ".json")
    .then((r) => {
      if (!r.ok) throw Error(r.status);
      return r.json();
    })
    .then((rows) => {
      if (key !== atlas.key) return;
      atlas.rows = rows;
      atlas.index = new Map(rows.map((r, i) => [r[0], i]));
      atlas.search = rows.map((r) =>
        fold([r[0], ...translations(r)].join(" ")),
      );
      if (tab === "atlas" && !studying) render();
    })
    .catch(() => {
      if (key === atlas.key) {
        atlas.error = true;
        if (tab === "atlas") render();
      }
    });
}
function selectedRows() {
  const q = fold(atlas.query.trim()),
    p = atlasStudy();
  const words =
    atlas.deck === ""
      ? null
      : new Set(decks[Number(atlas.deck)].words[state.to]);
  return (atlas.rows || []).filter(
    (r, i) =>
      (!words || words.has(r[0])) &&
      (!q || atlas.search[i].includes(q)) &&
      (!atlas.part || entryPOS(r) === atlas.part) &&
      (atlas.scope === "all" ||
        (atlas.scope === "saved" && Object.hasOwn(p.saved, r[0])) ||
        (atlas.scope === "due" && lexDue(r[0]))),
  );
}
function wordSheet(i) {
  const r = atlas.rows[i],
    saved = Object.hasOwn(atlasStudy().saved, r[0]);
  const tag = [t(entryPOS(r)), ...(strings[r[2]] ? [t(r[2])] : [])].join(" · ");
  pop(
    '<div class="split"><span class="badge">' +
      esc(tag) +
      "</span>" +
      button("close", t("close"), "x", "quiet") +
      '</div><h2 class="wordtitle">' +
      esc(r[0]) +
      '</h2><div class="actions">' +
      button("lexSay", t("listen"), "volume", "soft", i) +
      (r[3] ? '<span class="meta">' + esc(r[3]) + "</span>" : "") +
      "</div><h3>" +
      t("senses") +
      '</h3><ol class="senses">' +
      r[5]
        .map(
          ([tr, gloss]) =>
            "<li><strong>" +
            esc(tr.join(" · ")) +
            "</strong>" +
            (gloss
              ? '<small lang="' + state.to + '">' + esc(gloss) + "</small>"
              : "") +
            "</li>",
        )
        .join("") +
      "</ol>" +
      (r[4].length
        ? "<p><strong>" +
          t("forms") +
          "</strong> · " +
          esc(r[4].join(" · ")) +
          "</p>"
        : "") +
      '<div class="tools">' +
      button(
        "lexSave",
        t(saved ? "removeWord" : "saveWord"),
        saved ? "check" : "plus",
        "primary",
        i,
      ) +
      "</div>",
  );
}
function atlasResults() {
  const hits = selectedRows();
  return (
    '<div class="split tools"><strong>' +
    lexCount(hits.length) +
    " · " +
    t("lexWords") +
    "</strong>" +
    (hits.length ? button("lexStart", t("newRound"), "arrow", "soft") : "") +
    "</div>" +
    hits
      .slice(0, atlas.limit)
      .map(
        (r) =>
          '<button class="item dictrow" data-act="lexOpen" data-val="' +
          atlas.index.get(r[0]) +
          '"><span class="grow"><b>' +
          esc(r[0]) +
          "</b><small>" +
          esc(r[5][0][0].slice(0, 3).join(" · ")) +
          '</small></span><span class="pos">' +
          t(entryPOS(r)) +
          "</span>" +
          icon("next") +
          "</button>",
      )
      .join("") +
    (hits.length === 0 ? '<p class="muted">' + t("noMatch") + "</p>" : "") +
    (hits.length > atlas.limit
      ? button("lexMore", t("moreWords"), "plus", "soft")
      : "")
  );
}
function credits() {
  pop(
    "<h2>" +
      t("credits") +
      "</h2><p>FreeDict + WikDict · Karl Bartel · 2025.11.21</p><p>Wiktionary contributors · DBnary · wikdict.com. CC BY-SA 3.0 Unported · creativecommons.org/licenses/by-sa/3.0/</p><p>WikDict → Language: 10,000 selected headwords per direction, regrouped senses and bidirectional equivalents. Selection order uses wordfreq (Robyn Speer et al.). Adapted word packs · CC BY-SA 4.0 · https://creativecommons.org/licenses/by-sa/4.0/ · Sources: https://download.wikdict.com/dictionaries/tei/recommended/ · https://github.com/rspeer/wordfreq.</p>" +
      button("close", t("close"), "", "soft"),
  );
}
function atlasView() {
  ensureAtlas();
  if (atlas.playing && atlasStudy().round && atlas.rows) return roundView();
  const p = atlasStudy();
  return (
    '<div class="split"><h1>' +
    t("atlas") +
    '</h1><span class="badge">' +
    state.to.toUpperCase() +
    " → " +
    state.from.toUpperCase() +
    "</span></div>" +
    (!atlas.rows
      ? "<p>" +
        t(atlas.error ? "error" : "loadWords") +
        "</p>" +
        (atlas.error
          ? button("lexReload", t("lexRetry"), "repeat", "soft")
          : "")
      : '<div class="atlassearch">' +
        icon("search") +
        '<input id="lexQuery" type="search" aria-label="' +
        t("searchWords") +
        '" placeholder="' +
        t("searchWords") +
        '" value="' +
        esc(atlas.query) +
        '"></div>' +
        '<div class="atlasbar"><select id="lexScope" aria-label="' +
        t("collection") +
        '">' +
        [
          ["all", "lexAll"],
          ["saved", "favorites"],
          ["due", "dueWords"],
        ]
          .map(([v, k]) => option(v, t(k), atlas.scope))
          .join("") +
        '</select><select id="lexPart" aria-label="' +
        t("wordClass") +
        '">' +
        option("", t("wordClass"), atlas.part) +
        ["n", "v", "adj", "adv", "otherClass"]
          .map((k) => option(k, t(k), atlas.part))
          .join("") +
        "</select></div>" +
        '<label class="deckpick">' +
        t("topicDeck") +
        '<select id="lexDeck">' +
        option("", t("allTopics"), atlas.deck) +
        decks
          .map((d, i) =>
            option(String(i), d.names[codes.indexOf(ui)], atlas.deck),
          )
          .join("") +
        '</select></label><div id="deckExample">' +
        deckExample() +
        "</div>" +
        (p.round ? button("lexResume", t("resume"), "arrow", "primary") : "") +
        '<div id="lexResults">' +
        atlasResults() +
        "</div>") +
    '<div class="section">' +
    button("lexCredits", t("credits"), "book", "quiet") +
    "</div>"
  );
}
function deckExample() {
  if (atlas.deck === "") return "";
  const d = decks[Number(atlas.deck)];
  return (
    '<div class="deckexample"><strong lang="' +
    state.to +
    '">' +
    esc(d.example[state.to]) +
    "</strong><small>" +
    esc(d.example[state.from]) +
    "</small>" +
    button("lexExample", t("listen"), "volume", "quiet") +
    "</div>"
  );
}
function bindAtlas() {
  const el = $("#lexQuery");
  if (!el) return;
  const refresh = () => {
    atlas.limit = 25;
    $("#lexResults").innerHTML = atlasResults();
  };
  el.oninput = () => {
    atlas.query = el.value;
    refresh();
  };
  $("#lexDeck").onchange = (e) => {
    atlas.deck = e.target.value;
    $("#deckExample").innerHTML = deckExample();
    refresh();
  };
  $("#lexScope").onchange = (e) => {
    atlas.scope = e.target.value;
    refresh();
  };
  $("#lexPart").onchange = (e) => {
    atlas.part = e.target.value;
    refresh();
  };
}
function prepareQuestion(round) {
  const row = atlas.rows[atlas.index.get(round.words[round.step])];
  const accepted = new Set(translations(row).map(fold)),
    options = [row[5][0][0][0]];
  for (const alt of shuffled(
    atlas.rows.filter((r) => r !== row && r[1] === row[1]),
  )) {
    const tr = alt[5][0][0][0];
    if (
      !translations(alt).some((w) => accepted.has(fold(w))) &&
      !options.some((v) => fold(v) === fold(tr))
    )
      options.push(tr);
    if (options.length === 4) break;
  }
  round.options = shuffled(options);
  round.answer = null;
  round.typed = "";
}
function startRound() {
  const hits = selectedRows();
  if (!hits.length) return;
  const p = atlasStudy();
  const overdue = shuffled(hits.filter((r) => lexDue(r[0])));
  const fresh = hits.filter((r) => !Object.hasOwn(p.progress, r[0]));
  const later = hits.filter(
    (r) => Object.hasOwn(p.progress, r[0]) && !lexDue(r[0]),
  );
  const ordered = [
    ...overdue,
    ...shuffled(fresh.slice(0, Math.max(40, 10 - overdue.length))),
    ...shuffled(later),
  ];
  p.round = {
    words: ordered.slice(0, 10).map((r) => r[0]),
    step: 0,
    correct: 0,
  };
  prepareQuestion(p.round);
  atlas.playing = true;
  store();
  navigate();
}
function roundView() {
  const p = atlasStudy(),
    s = p.round;
  if (s.step >= s.words.length)
    return (
      "<h1>" +
      t("roundDone") +
      '</h1><div class="lexcard"><strong class="bigword">' +
      s.correct +
      " / " +
      s.words.length +
      "</strong></div>" +
      button("lexEnd", t("atlas"), "back", "primary")
    );
  const row = atlas.rows[atlas.index.get(s.words[s.step])],
    type = s.step % 3 === 2 ? "spell" : "match",
    done = s.answer !== null;
  return (
    '<div class="split">' +
    button("lexPause", t("pause"), "back", "quiet") +
    "<b>" +
    t("round") +
    " · " +
    (s.step + 1) +
    " / " +
    s.words.length +
    '</b></div><progress class="progress" max="' +
    s.words.length +
    '" value="' +
    (s.step + 1) +
    '"></progress>' +
    '<div class="lexcard"><span>' +
    t(entryPOS(row)) +
    " · " +
    names[type === "spell" ? state.from : state.to] +
    "</span><h2>" +
    esc(type === "spell" ? row[5][0][0].join(" · ") : row[0]) +
    "</h2>" +
    (type === "match"
      ? button("lexSay", t("listen"), "volume", "soft", atlas.index.get(row[0]))
      : "") +
    "</div><h3>" +
    t(type) +
    "</h3>" +
    (type === "spell"
      ? field(
          t("yourAnswer"),
          '<input id="lexTyped" autocomplete="off" value="' +
            esc(s.typed) +
            '" ' +
            (done ? "disabled" : "") +
            ">",
        ) + (done ? "" : button("lexAnswer", t("check"), "check", "primary"))
      : s.options
          .map(
            (q) =>
              '<button class="choice" data-act="lexAnswer" data-val="' +
              esc(q) +
              '" ' +
              (done ? "disabled" : "") +
              ">" +
              esc(q) +
              "</button>",
          )
          .join("")) +
    (done
      ? '<div class="feedback"><strong>' +
        t(s.answer ? "correct" : "retry") +
        "</strong><p>" +
        esc(row[0]) +
        " · " +
        esc(row[5][0][0].join(" / ")) +
        "</p></div>" +
        button("lexNext", t("next"), "arrow", "primary")
      : "")
  );
}
function lexAction(a, v) {
  const p = atlasStudy(),
    s = p.round;
  switch (a) {
    case "lexReload":
      atlas.key = "";
      navigate();
      break;
    case "lexExample":
      speak(decks[Number(atlas.deck)].example[state.to]);
      break;
    case "lexCredits":
      credits();
      break;
    case "lexOpen":
      wordSheet(Number(v));
      break;
    case "lexSay":
      speak(atlas.rows[Number(v)][0]);
      break;
    case "lexSave": {
      const word = atlas.rows[Number(v)][0];
      if (Object.hasOwn(p.saved, word)) delete p.saved[word];
      else
        Object.defineProperty(p.saved, word, {
          value: true,
          writable: true,
          configurable: true,
          enumerable: true,
        });
      store();
      render();
      wordSheet(Number(v));
      break;
    }
    case "lexMore":
      atlas.limit += 40;
      $("#lexResults").innerHTML = atlasResults();
      break;
    case "lexStart":
      if (s) {
        pop(
          "<h2>" +
            t("replaceRound") +
            '</h2><div class="actions">' +
            button("lexReplace", t("newRound"), "arrow", "primary") +
            button("close", t("close"), "", "quiet") +
            "</div>",
        );
      } else startRound();
      break;
    case "lexReplace":
      closePop();
      startRound();
      break;
    case "lexEnd":
      p.round = null;
      store();
      atlas.playing = false;
      navigate();
      break;
    case "lexPause":
      atlas.playing = false;
      navigate();
      break;
    case "lexResume":
      atlas.playing = true;
      navigate();
      break;
    case "lexAnswer": {
      if (s.answer !== null) return;
      const w = s.words[s.step],
        row = atlas.rows[atlas.index.get(w)],
        spelling = s.step % 3 === 2;
      s.typed = spelling ? $("#lexTyped").value.trim() : v;
      if (!s.typed) return;
      s.answer = spelling
        ? norm(s.typed) === norm(w)
        : translations(row).includes(v);
      const old = Object.hasOwn(p.progress, w) ? p.progress[w].stage : -1;
      const stage = s.answer ? Math.min(old + 1, strengthDays.length - 1) : -1;
      Object.defineProperty(p.progress, w, {
        value: {
          stage,
          due:
            Date.now() + (s.answer ? strengthDays[stage] * 86400000 : 600000),
        },
        writable: true,
        configurable: true,
        enumerable: true,
      });
      if (s.answer) s.correct++;
      store();
      render();
      break;
    }
    case "lexNext":
      if (s.answer === null) return;
      s.step++;
      if (s.step < s.words.length) prepareQuestion(s);
      store();
      navigate();
      break;
  }
}
