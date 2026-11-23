"use strict";
const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
const courseCodes = ["en", "de", "es"];
const tabs = [
  ["today", "book"],
  ["course", "layers"],
  ["atlas", "search"],
  ["review", "repeat"],
  ["journal", "pen"],
];
const state = JSON.parse(
  localStorage.getItem("study.v1") || '{"from":"de","to":"es","courses":{}}',
);
let tab = "today",
  studying = false,
  reveal = false,
  reviewCard = null,
  journalModel = false;
const store = () => localStorage.setItem("study.v1", JSON.stringify(state));
function track() {
  const key = state.from + "-" + state.to;
  return (state.courses[key] ??= {
    level: "A1",
    done: [],
    cards: {},
    entries: {},
    journalDay: "",
    journalOffset: 0,
    session: null,
  });
}
const ids = () =>
  units.map((_, i) => i).filter((i) => units[i].level === track().level);
const nextUnit = () => ids().find((i) => !track().done.includes(i)) ?? ids()[0];
const currentUnit = () =>
  track().session && units[track().session.unit].level === track().level
    ? track().session.unit
    : nextUnit();
const first = (entry, lang) => entry.translation[lang][0];
const dateKey = (i) => day() + "/" + i;
const strengthDays = [1, 3, 7, 15, 30, 60];
const due = () =>
  Object.entries(track().cards)
    .filter(([, card]) => card.due <= Date.now())
    .sort((a, b) => a[1].due - b[1].due);
function grade(key, ok) {
  const old = track().cards[key] || { stage: -1 };
  const stage = ok ? Math.min(old.stage + 1, strengthDays.length - 1) : -1;
  track().cards[key] = {
    stage,
    due: Date.now() + (ok ? strengthDays[stage] * 86400000 : 600000),
  };
}
const checks = [
  [
    "Name a person or object and add one concrete detail.",
    "Nenne eine Person oder Sache und ergänze ein konkretes Detail.",
    "Bir kişi veya nesneden söz et, somut bir ayrıntı ekle.",
    "Nombra una persona o cosa y añade un detalle concreto.",
  ],
  [
    "Make the time, place and request clear. Link two ideas.",
    "Mach Zeit, Ort und Anliegen deutlich. Verbinde zwei Gedanken.",
    "Zamanı, yeri ve isteğini belirt. İki düşünceyi bağla.",
    "Precisa el momento, el lugar y la petición. Conecta dos ideas.",
  ],
  [
    "Organise events and explain one reason or consequence.",
    "Ordne die Ereignisse und erläutere einen Grund oder eine Folge.",
    "Olayları sırala ve bir neden ya da sonuç açıkla.",
    "Ordena los hechos y explica una causa o consecuencia.",
  ],
  [
    "Support your position and address an objection or condition.",
    "Begründe deine Position und geh auf einen Einwand oder eine Bedingung ein.",
    "Görüşünü gerekçelendir ve bir itirazı veya koşulu ele al.",
    "Justifica tu postura y aborda una objeción o condición.",
  ],
  [
    "Separate evidence from inference. Match your register to the reader.",
    "Trenne Befund und Schlussfolgerung. Stimme das Register auf die Leserschaft ab.",
    "Bulguyu çıkarımdan ayır. Üslubunu okuyucuya göre seç.",
    "Distingue evidencia e inferencia. Adapta el registro al lector.",
  ],
  [
    "Reconcile the viewpoints. Preserve ambiguity, implication and degree of certainty.",
    "Führe die Sichtweisen zusammen. Erhalte Mehrdeutigkeit, Unterton und Gewissheitsgrad.",
    "Bakış açılarını uzlaştır. Çift anlamı, imayı ve kesinlik derecesini koru.",
    "Concilia los puntos de vista. Conserva ambigüedad, implicación y grado de certeza.",
  ],
];
const checklist = (u) => checks[levels.indexOf(u.level)][codes.indexOf(ui)];
function journalId() {
  const p = track(),
    group = ids();
  if (p.journalDay !== day()) {
    p.journalDay = day();
    p.journalOffset = 0;
  }
  const ordinal = Math.floor(
    Date.UTC(
      ...day()
        .split("-")
        .map((n, i) => (i === 1 ? Number(n) - 1 : Number(n))),
    ) / 86400000,
  );
  return group[(ordinal + p.journalOffset) % group.length];
}
function lessonRow(i) {
  const u = units[i],
    done = track().done.includes(i);
  return (
    '<button class="item" data-act="lesson" data-val="' +
    i +
    '"><span class="listicon">' +
    icon(done ? "check" : "book") +
    '</span><span class="grow">' +
    esc(u.title[state.to]) +
    "<small>" +
    esc(u.title[state.from]) +
    "</small></span>" +
    icon("next") +
    "</button>"
  );
}
function levelButtons() {
  return (
    '<div class="levels">' +
    levels
      .map((l) => button("level", l, "", l === track().level ? "on" : "", l))
      .join("") +
    "</div>"
  );
}
function courseLine() {
  return (
    '<div class="split"><span class="badge">' +
    names[state.from] +
    " → " +
    names[state.to] +
    "</span>" +
    button("pair", t("pair"), "settings", "quiet") +
    "</div>"
  );
}
function courseView() {
  return (
    "<h1>" +
    t("course") +
    "</h1>" +
    courseLine() +
    "<h2>" +
    t("yourlevel") +
    "</h2>" +
    levelButtons() +
    '<section class="section"><div class="split"><h2>' +
    track().level +
    '</h2><span class="meta">' +
    ids().filter((i) => track().done.includes(i)).length +
    " / " +
    ids().length +
    " · " +
    t("complete") +
    "</span></div>" +
    '<p class="levelobjective">' +
    esc(checklist(units[ids()[0]])) +
    "</p>" +
    ids().map(lessonRow).join("") +
    '</section><div class="actions tools">' +
    button("grammar", t("grammar"), "book", "soft") +
    button("dictation", t("listening"), "volume", "soft") +
    "</div>"
  );
}
let dictation = 0;
const grammarIndex = () => track().ruleIndex?.[track().level] || 0;
function ruleDialog(choice = null) {
  const l = track().level,
    rules = [grammar[l][state.to], ...additionalGrammar[l][state.to]];
  const r = rules[grammarIndex() % rules.length];
  pop(
    '<span class="badge">' +
      track().level +
      " · " +
      (grammarIndex() + 1) +
      " / " +
      rules.length +
      "</span><h2>" +
      t("grammar") +
      "</h2><p>" +
      t("ruletask") +
      '</p><p class="reading">' +
      esc(r.prompt) +
      "</p>" +
      (choice === null
        ? shuffled(r.options)
            .map((w) => button("ruleChoice", w, "", "choice", w))
            .join("")
        : '<div class="feedback"><strong>' +
          t(choice === r.options[0] ? "correct" : "retry") +
          "</strong><p>" +
          esc(r.prompt.replace("___", r.options[0])) +
          '</p><p lang="' +
          state.from +
          '">' +
          esc(r.why[state.from]) +
          "</p></div>") +
      (choice === null
        ? ""
        : button("ruleNext", t("next"), "arrow", "primary")) +
      button("close", t("close"), "", "soft"),
  );
}
function dictationDialog() {
  const u = units[dictation];
  pop(
    '<span class="badge">' +
      u.level +
      "</span><h2>" +
      t("listening") +
      "</h2><p>" +
      t("typeHeard") +
      '</p><div class="tools">' +
      button("listenClip", t("listen"), "volume", "soft") +
      "</div>" +
      field(
        t("yourAnswer") + " · " + names[state.to],
        '<textarea id="heard" rows="2"></textarea>',
      ) +
      '<div class="actions">' +
      button("checkHeard", t("compare"), "check", "primary") +
      button("otherClip", t("other"), "repeat", "quiet") +
      '</div><div id="heardModel"></div>' +
      button("close", t("close"), "", "quiet"),
  );
}
function picker() {
  const select = (key, values, val) =>
    '<select id="' +
    key +
    '">' +
    values.map((k) => option(k, names[k], val)).join("") +
    "</select>";
  pop(
    "<h2>" +
      t("route") +
      "</h2>" +
      field(t("source"), select("from", courseCodes, state.from)) +
      field(
        t("target"),
        select(
          "to",
          courseCodes.filter((c) => c !== state.from),
          state.to,
        ),
      ) +
      '<div class="actions">' +
      button("apply", t("save"), "check", "primary") +
      button("close", t("cancel"), "", "quiet") +
      "</div>",
  );
  $("#from").onchange = () => {
    const from = $("#from").value,
      old = $("#to").value;
    $("#to").innerHTML = courseCodes
      .filter((c) => c !== from)
      .map((c) => option(c, names[c], old))
      .join("");
  };
}
function sample(u) {
  return (
    '<div class="feedback"><strong>' +
    t("model") +
    '</strong><p lang="' +
    state.to +
    '">' +
    esc(u.model[state.to]) +
    '</p><p class="meta">' +
    esc(checklist(u)) +
    "</p></div>"
  );
}
function promptEditor(u, text) {
  return (
    '<p class="prompt" lang="' +
    state.from +
    '">' +
    esc(u.prompt[state.from]) +
    "</p>" +
    '<details class="wordhints"><summary>' +
    t("hints") +
    "</summary>" +
    u.words[state.to]
      .map(
        (w, i) =>
          "<div><b>" +
          esc(w) +
          "</b><span>" +
          esc(u.words[state.from][i]) +
          "</span></div>",
      )
      .join("") +
    "</details>" +
    field(
      t("draft") + " · " + names[state.to],
      '<textarea id="draft" lang="' +
        state.to +
        '" rows="5">' +
        esc(text) +
        "</textarea>",
    ) +
    '<div class="writingstats"><span id="written">' +
    text.trim().split(/\s+/).filter(Boolean).length +
    "</span> " +
    t("countWords") +
    " · " +
    t("wordGoal") +
    " " +
    ["10–25", "25–50", "50–90", "90–150", "150–220", "200–300"][
      levels.indexOf(u.level)
    ] +
    "</div>"
  );
}
function journalView() {
  const i = journalId(),
    u = units[i],
    entries = Object.entries(track().entries)
      .filter(([, e]) => e.text.trim())
      .sort((a, b) => b[1].updated - a[1].updated);
  return (
    "<h1>" +
    t("journal") +
    "</h1>" +
    courseLine() +
    '<div class="box"><div class="line"><span class="badge">' +
    u.level +
    "</span>" +
    button("change", t("change"), "repeat", "quiet") +
    "</div><h2>" +
    esc(u.title[state.to]) +
    "</h2>" +
    promptEditor(u, track().entries[dateKey(i)]?.text || "") +
    '<div class="actions">' +
    button("model", t("compare"), "book", "soft") +
    '</div><span class="meta" id="saved"></span>' +
    (journalModel ? sample(u) : "") +
    "</div><h2>" +
    t("archive") +
    "</h2>" +
    (entries.length
      ? entries
          .map(
            ([key, e]) =>
              '<details class="box"><summary>' +
              fmt(key.split("/")[0]) +
              " · " +
              esc(units[e.unit].title[state.to]) +
              '</summary><p class="entry">' +
              esc(e.text) +
              "</p>" +
              button("deleteEntry", t("delete"), "bin", "quiet", key) +
              "</details>",
          )
          .join("")
      : '<p class="muted">' + t("emptyjournal") + "</p>")
  );
}
function reviewView() {
  const scheduled = due();
  if (!scheduled.some(([k]) => k === reviewCard)) {
    reviewCard = scheduled[0]?.[0] || null;
    reveal = false;
  }
  let card = '<p class="muted">' + t("emptyreview") + "</p>";
  if (reviewCard) {
    const [i, w] = reviewCard.split("."),
      u = units[i];
    card =
      '<div class="box"><span class="badge">' +
      u.level +
      '</span><p class="bigword">' +
      esc(u.words[state.to][w]) +
      "</p>" +
      (reveal
        ? '<p class="reading">' +
          esc(u.words[state.from][w]) +
          '</p><div class="actions">' +
          button("response", t("again"), "repeat", "soft", "0") +
          button("response", t("know"), "check", "primary", "1") +
          "</div>"
        : button("reveal", t("show"), "", "primary")) +
      "</div>";
  }
  const learned = Object.keys(track().cards);
  return (
    "<h1>" +
    t("review") +
    "</h1>" +
    courseLine() +
    "<h2>" +
    t("due") +
    " · " +
    scheduled.length +
    "</h2>" +
    card +
    '<section class="section"><h2>' +
    t("collection") +
    " · " +
    learned.length +
    "</h2>" +
    (learned.length
      ? learned
          .map((key) => {
            const [i, w] = key.split("."),
              u = units[i];
            return (
              '<div class="wordrow"><div><strong>' +
              esc(u.words[state.to][w]) +
              "</strong><small>" +
              esc(u.words[state.from][w]) +
              "</small></div>" +
              button("sayword", t("listen"), "volume", "quiet", key) +
              "</div>"
            );
          })
          .join("")
      : '<p class="muted">' + t("emptywords") + "</p>") +
    "</section>"
  );
}
function shuffled(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function start(i) {
  const p = track();
  if (!p.session || p.session.unit !== i) {
    p.paused ??= {};
    if (p.session) p.paused[p.session.unit] = p.session;
    p.session = p.paused[i] || {
      unit: i,
      step: 0,
      order: shuffled([0, 1, 2, 3]),
      choices: shuffled([0, 1, 2, 3]),
      statements: shuffled(["yes", "no"]),
      draft: "",
      answer: "",
      feedback: null,
    };
  }
  p.level = units[i].level;
  studying = true;
  store();
  navigate();
}
function lessonView() {
  const s = track().session,
    u = units[s.unit],
    n = s.step,
    skill =
      n < 4 ? "words" : n === 4 ? "read" : n === 5 ? "translate" : "writing";
  const intro =
    '<div class="line">' +
    button("pause", t("pause"), "back", "quiet") +
    '<span class="meta">' +
    u.level +
    " · " +
    t("step") +
    " " +
    (n + 1) +
    ' / 7</span></div><progress class="progress" max="7" value="' +
    (n + 1) +
    '"></progress><h1>' +
    t(skill) +
    "</h1>";
  let body = "";
  if (n < 4) {
    const w = s.order[n];
    body =
      "<p>" +
      t("meaning") +
      '</p><div class="line"><p class="bigword">' +
      esc(u.words[state.to][w]) +
      "</p>" +
      button("sayword", t("listen"), "volume", "soft", s.unit + "." + w) +
      "</div>" +
      s.choices
        .map((j) => button("choice", u.words[state.from][j], "", "choice", j))
        .join("");
  }
  if (n === 4) {
    body =
      '<div class="split"><h3>' +
      esc(u.title[state.to]) +
      "</h3>" +
      button("saytext", t("listen"), "volume", "soft") +
      '</div><p class="reading" lang="' +
      state.to +
      '">' +
      esc(u.text[state.to]) +
      "</p><strong>" +
      t("readingQ") +
      "</strong>" +
      s.statements
        .map((k) => button("choice", u[k][state.to], "", "choice", k))
        .join("");
  }
  if (n === 5) {
    body =
      "<p>" +
      t("translationQ") +
      '</p><p class="reading">' +
      esc(first(u, state.from)) +
      "</p>" +
      field(
        t("yourAnswer") + " · " + names[state.to],
        '<textarea id="translation" rows="2">' + esc(s.answer) + "</textarea>",
      ) +
      (!s.feedback ? button("check", t("check"), "check", "primary") : "");
  }
  if (n === 6) {
    body =
      promptEditor(u, s.draft) +
      (!s.feedback
        ? button("compare", t("compare"), "book", "primary")
        : sample(u));
  }
  if (s.feedback && n < 6) {
    const f = s.feedback;
    body +=
      '<div class="feedback" role="status"><strong>' +
      t(f.kind) +
      "</strong>" +
      (f.expected ? "<p>" + esc(f.expected) + "</p>" : "") +
      "</div>";
  }
  if (s.feedback)
    body += button("next", t(n === 6 ? "finish" : "next"), "arrow", "primary");
  return (
    intro +
    '<div class="lessoncontext">' +
    esc(u.title[state.to]) +
    " · " +
    esc(u.title[state.from]) +
    "</div>" +
    body
  );
}
function render() {
  head("Language", tabs, tab);
  $("#nav").hidden = studying || inPractice || conversationOpen;
  $("#screen").innerHTML = conversationOpen
    ? conversationView()
    : inPractice
      ? questionView()
      : studying
        ? lessonView()
        : {
            today: practiceHome,
            course: courseView,
            review: reviewView,
            journal: journalView,
            atlas: atlasView,
          }[tab]();
  $("#screen").dataset.view = conversationOpen
    ? "conversation"
    : inPractice
      ? "practice"
      : studying
        ? "lesson"
        : tab;
  if (conversationOpen) return;
  if (inPractice) {
    bindPractice();
    return;
  }
  if (tab === "atlas" && !studying) bindAtlas();
  if (studying && track().session.feedback) {
    document
      .querySelectorAll("[data-act=choice],#translation")
      .forEach((b) => (b.disabled = true));
  }
  const area = $("#draft");
  if (area)
    area.oninput = () => {
      if ($("#written"))
        $("#written").textContent = area.value
          .trim()
          .split(/\s+/)
          .filter(Boolean).length;
      if (studying) {
        track().session.draft = area.value;
        store();
      } else {
        writeEntry(journalId(), area.value);
        $("#saved").textContent = t("saved");
      }
    };
  const input = $("#translation");
  if (input)
    input.oninput = () => {
      track().session.answer = input.value;
      store();
    };
}
function writeEntry(i, text, lesson = false) {
  const k = dateKey(i) + (lesson ? "/lesson" : "");
  if (text.trim()) track().entries[k] = { unit: i, text, updated: Date.now() };
  else delete track().entries[k];
  store();
}
const norm = (s) =>
  s
    .normalize("NFC")
    .trim()
    .toLocaleLowerCase(state.to)
    .replace(/[.,!?¿¡:;„“”"]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ");
function speak(value) {
  if (window.Device) {
    Device.speak(state.to, value);
    return;
  }
  const synth = window.speechSynthesis,
    v = synth
      ?.getVoices()
      .find((v) => v.localService && v.lang.split("-")[0] === state.to);
  if (!v) {
    window.speechUnavailable();
    return;
  }
  const msg = new SpeechSynthesisUtterance(value);
  msg.voice = v;
  synth.cancel();
  synth.speak(msg);
}
window.speechUnavailable = () => notify(t("speakerr"));
function action(a, v) {
  if (a.startsWith("talk")) {
    talkAction(a, v);
    return;
  }
  if (/^p[A-Z]/.test(a)) {
    practiceAction(a, v);
    return;
  }
  if (a.startsWith("lex")) {
    lexAction(a, v);
    return;
  }
  const p = track(),
    s = p.session,
    u = s ? units[s.unit] : null;
  switch (a) {
    case "tab":
      tab = v;
      studying = false;
      reviewCard = null;
      journalModel = false;
      break;
    case "pair":
      picker();
      return;
    case "grammar":
      ruleDialog();
      return;
    case "ruleNext": {
      const p = track();
      p.ruleIndex ??= {};
      p.ruleIndex[p.level] =
        (grammarIndex() + 1) %
        (1 + additionalGrammar[p.level][state.to].length);
      store();
      ruleDialog();
      return;
    }
    case "ruleChoice":
      ruleDialog(v);
      return;
    case "dictation":
      dictation = nextUnit();
      dictationDialog();
      return;
    case "otherClip": {
      const list = ids();
      dictation = list[(list.indexOf(dictation) + 1) % list.length];
      dictationDialog();
      return;
    }
    case "listenClip":
      speak(first(units[dictation], state.to));
      return;
    case "checkHeard": {
      const model = first(units[dictation], state.to),
        heard = $("#heard").value;
      $("#heardModel").innerHTML =
        '<div class="feedback"><strong>' +
        t(heard.trim() && norm(heard) === norm(model) ? "correct" : "model") +
        "</strong><p>" +
        esc(model) +
        "</p></div>";
      return;
    }
    case "apply":
      state.from = $("#from").value;
      state.to = $("#to").value;
      atlas.key = "";
      atlas.playing = false;
      closePop();
      reviewCard = null;
      journalModel = false;
      break;
    case "level":
      p.level = v;
      if (tab !== "today") tab = "course";
      break;
    case "lesson":
      start(Number(v));
      return;
    case "pause":
      studying = false;
      tab = "today";
      break;
    case "sayword": {
      const [i, w] = v.split(".");
      speak(units[i].words[state.to][w]);
      return;
    }
    case "saytext":
      speak(u.text[state.to]);
      return;
    case "choice": {
      if (s.feedback) return;
      let ok, expected;
      if (s.step < 4) {
        const w = s.order[s.step];
        ok = Number(v) === w;
        expected = u.words[state.from][w];
        grade(s.unit + "." + w, ok);
      } else {
        ok = v === "yes";
        expected = u.yes[state.to];
      }
      s.feedback = { kind: ok ? "correct" : "retry", expected };
      break;
    }
    case "check": {
      if (!s.answer.trim()) {
        $("#translation").focus();
        return;
      }
      const accepted = u.translation[state.to].map(norm),
        ans = norm(s.answer),
        fold = (x) => x.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const kind = accepted.includes(ans)
        ? "correct"
        : accepted.some((x) => fold(x) === fold(ans))
          ? "accent"
          : "variant";
      s.feedback = { kind, expected: u.translation[state.to].join(" / ") };
      break;
    }
    case "compare":
      if (!s.draft.trim()) {
        $("#draft").focus();
        return;
      }
      s.feedback = { kind: "self" };
      break;
    case "next":
      if (!s.feedback) return;
      if (s.step === 6) {
        writeEntry(s.unit, s.draft, true);
        if (p.paused) delete p.paused[s.unit];
        if (!p.done.includes(s.unit)) p.done.push(s.unit);
        p.session = null;
        studying = false;
        tab = "today";
        notify(t("done"));
      } else {
        s.step++;
        s.feedback = null;
        s.choices = shuffled([0, 1, 2, 3]);
      }
      break;
    case "change":
      p.journalOffset++;
      journalModel = false;
      break;
    case "model":
      journalModel = !journalModel;
      break;
    case "deleteEntry":
      pop(
        "<h2>" +
          t("deleteEntry") +
          "</h2>" +
          button("confirmDelete", t("delete"), "bin", "danger", v) +
          button("close", t("cancel"), "", "quiet"),
      );
      return;
    case "confirmDelete":
      delete p.entries[v];
      closePop();
      break;
    case "reveal":
      reveal = true;
      break;
    case "response":
      if (reviewCard) grade(reviewCard, v === "1");
      reviewCard = null;
      reveal = false;
      break;
  }
  store();
  navigate();
}
window.appBack = () => {
  if ($("#dialog").open) {
    closePop();
    return true;
  }
  if (conversationOpen) {
    talkAction("talkExit");
    return true;
  }
  if (inPractice) {
    practiceAction("pPause");
    return true;
  }
  if (studying) {
    action("pause");
    return true;
  }
  if (tab === "atlas" && atlas.playing) {
    lexAction("lexPause");
    return true;
  }
  if (tab !== "today") {
    action("tab", "today");
    return true;
  }
  return false;
};
render();
