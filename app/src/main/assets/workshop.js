"use strict";

// Each focus still mixes skills so learners see a phrase in more than one context.
const focusPlans = {
  focusListen: [
    "listen",
    "reading",
    "listen",
    "recall",
    "listen",
    "order",
    "write",
    "listen",
    "reading",
    "grammar",
  ],
  focusWords: [
    "recall",
    "recall",
    "order",
    "recall",
    "bank",
    "reading",
    "recall",
    "listen",
    "recall",
    "write",
  ],
  focusGrammar: [
    "grammar",
    "order",
    "grammar",
    "write",
    "order",
    "grammar",
    "reading",
    "order",
    "recall",
    "listen",
  ],
  focusReadWrite: [
    "reading",
    "write",
    "order",
    "write",
    "reading",
    "grammar",
    "write",
    "reading",
    "order",
    "write",
  ],
};
function practiceModes(mixed, size, hasBank) {
  const chosen = focusPlans[practiceState().focus]?.slice(0, size);
  if (chosen)
    return chosen.map((k) => (k === "bank" && !hasBank ? "recall" : k));
  if (hasBank) mixed[size === 4 ? 0 : 5] = "bank";
  return mixed;
}
function hintFor(q, e) {
  const answer = q.answers[0],
    words = answer.trim().split(/\s+/);
  if (q.kind === "grammar") {
    // Keep the rule visible while withholding any occurrence of the solution.
    const tokens = q.why.split(/([^\p{L}\p{M}’'-]+)/u);
    const parts = answer
      .toLocaleLowerCase(state.to)
      .split(/([^\p{L}\p{M}’'-]+)/u);
    for (let i = 0; i <= tokens.length - parts.length; i++) {
      if (
        parts.every(
          (part, j) => tokens[i + j].toLocaleLowerCase(state.to) === part,
        )
      ) {
        tokens.splice(i, parts.length, "___");
      }
    }
    return tokens.join("");
  }
  if (q.kind === "reading")
    return (
      units[q.unit].title[state.from] +
      " · " +
      units[q.unit].words[state.to]
        .slice(0, 2)
        .map((w, i) => w + " = " + units[q.unit].words[state.from][i])
        .join(" / ")
    );
  if (q.kind === "write")
    return (
      units[q.unit].words[state.to].slice(0, 2).join(" · ") +
      " — " +
      checklist(units[q.unit])
    );
  if (q.kind === "order") {
    let i = 0;
    while (
      i < e.picked.length &&
      norm(e.tokens[e.picked[i]]) === norm(words[i] || "")
    )
      i++;
    return (
      t("hOpening") +
      " · " +
      words.slice(0, Math.min(i + 1, words.length)).join(" ")
    );
  }
  if (q.kind === "listen") return t("hOpening") + " · " + openingWords(answer);
  return words
    .map((w) => {
      const letters = Array.from(w);
      return letters.length === 1
        ? "·"
        : letters[0] + "·".repeat(letters.length - 1);
    })
    .join(" ");
}
function openingWords(line) {
  const words = line.trim().split(/\s+/);
  if (words.length === 1) return Array.from(line)[0] + "…";
  return (
    words
      .slice(0, Math.min(words.length - 1, words.length >= 7 ? 3 : 1))
      .join(" ") + " …"
  );
}
function answerDetail(q, typed) {
  const text = norm(typed),
    accepted = q.answers.map(norm);
  const accents = (s) => s.normalize("NFD").replace(/\p{M}/gu, "");
  if (accepted.some((s) => s !== text && accents(s) === accents(text)))
    return t("hAccent");
  if (
    ["recall", "bank"].includes(q.kind) &&
    q.answers.some((x) => shortAnswer(x) === shortAnswer(typed))
  )
    return t("hArticle");
  const sorted = (s) => s.split(/\s+/).sort().join(" ");
  if (accepted.some((s) => sorted(s) === sorted(text))) return t("hOrder");
  return "";
}
function hintControl(q, e) {
  if (e.feedback) return "";
  const content = e.hinted
    ? '<div class="studyhint" role="status">' + esc(hintFor(q, e)) + "</div>"
    : button("labHint", t("hGet"), "book", "quiet");
  return '<div class="hintline">' + content + "</div>";
}
function mistakeBook() {
  const p = levelPractice();
  if (p.mistakes) return p.mistakes;
  const saved = {};
  // Older sessions kept schedules without full question snapshots.
  const pool = makeTasks(ids()[0]);
  for (const q of pool) {
    const record = p.schedule[promptKey(q)];
    if (record?.stage === 0) {
      const last = p.last?.log?.findLast?.(
        (x) => x.kind === q.kind && x.model === q.answers[0] && x.ok === false,
      );
      saved[promptKey(q)] = {
        q,
        wrong: last?.text || "",
        at: Math.max(0, record.due - 86400000),
        count: 1,
        firstDay: "",
        finished: false,
      };
    }
  }
  p.mistakes = saved;
  return saved;
}
function rememberMiss(q, text) {
  const book = mistakeBook(),
    key = promptKey(q),
    previous = book[key];
  book[key] = {
    q: { ...q, retry: false },
    wrong: text.slice(0, 240),
    at: Date.now(),
    count: (previous?.count || 0) + 1,
    firstDay: "",
    finished: false,
  };
}
function recoverMistake(item) {
  if (!item || item.finished || item.firstDay === day()) return;
  if (item.firstDay) item.finished = true;
  else item.firstDay = day();
}
const unresolved = () =>
  Object.values(mistakeBook()).filter((x) => !x.finished).length;
let bookFilter = "open",
  bookKey = null,
  bookChoice = null;
function bookJump() {
  return (
    '<div class="lablinks">' +
    button(
      "labFocus",
      t(practiceState().focus || "focusMixed"),
      "settings",
      "lablink",
    ) +
    button("labBook", t("hBook") + " · " + unresolved(), "repeat", "lablink") +
    "</div>"
  );
}
function openMistakes() {
  bookKey = null;
  bookChoice = null;
  const entries = Object.entries(mistakeBook())
    .filter(([, x]) => x.finished === (bookFilter === "done"))
    .sort((a, b) => a[1].at - b[1].at);
  pop(
    '<span class="badge">' +
      track().level +
      " · " +
      esc(names[state.to]) +
      "</span><h2>" +
      t("hBook") +
      "</h2><p>" +
      t("hBookHelp") +
      '</p><div class="levels">' +
      ["open", "done"]
        .map((k) =>
          button(
            "labFilter",
            t(k === "open" ? "hActive" : "hMastered"),
            "",
            k === bookFilter ? "on" : "",
            k,
          ),
        )
        .join("") +
      "</div>" +
      (entries.length
        ? entries
            .map(
              ([key, item]) =>
                '<button class="item erritem" data-act="labDrill" data-val="' +
                esc(key) +
                '"><i>' +
                icon(practiceIcons[item.q.kind]) +
                '</i><span class="grow"><b>' +
                esc(
                  item.q.kind === "listen"
                    ? t("pListen") +
                        " · " +
                        units[item.q.unit].title[state.from]
                    : item.q.cue,
                ) +
                "</b><small>" +
                esc(fmt(day(new Date(item.at)))) +
                " · " +
                (item.finished ? 2 : item.firstDay ? 1 : 0) +
                "/2</small></span>" +
                icon("next") +
                "</button>",
            )
            .join("")
        : '<p class="muted section">' + t("hNoErrors") + "</p>") +
      button("close", t("close"), "", "quiet"),
  );
}
function drillView() {
  const item = mistakeBook()[bookKey];
  if (!item) {
    openMistakes();
    return;
  }
  const q = item.q,
    f = bookChoice;
  let prompt =
    q.kind === "listen"
      ? button("labHear", t("listen"), "volume", "soft") +
        button("labSlow", t("hSlow"), "", "quiet")
      : "";
  if (q.kind !== "listen" || f?.asText)
    prompt += '<p class="practicecue">' + esc(q.cue) + "</p>";
  if (q.kind === "listen" && !f?.asText && !f?.checked)
    prompt += button("labText", t("pUseText"), "pen", "quiet");
  const options = q.options;
  pop(
    '<div class="split">' +
      button("labBook", t("hBook"), "back", "quiet") +
      "<b>" +
      track().level +
      "</b></div><h2>" +
      t(practiceNames[q.kind]) +
      "</h2>" +
      prompt +
      (f?.checked
        ? '<div class="coachfeedback ' +
          (f.ok ? "" : "againstate") +
          '"><strong>' +
          t(f.ok ? "correct" : "pCompare") +
          "</strong><p>" +
          esc(q.answers[0]) +
          "</p><small>" +
          esc(q.why || answerDetail(q, f.text)) +
          "</small></div><p>" +
          t("yourAnswer") +
          " · " +
          esc(f.text) +
          "</p>" +
          (f.ok && f.asText ? "<p>" + t("hTextPractice") + "</p>" : "") +
          (f.previous
            ? '<p class="muted">' +
              t("hEarlier") +
              " · " +
              esc(f.previous) +
              "</p>"
            : "") +
          button("labBook", t("hBook"), "back", "primary")
        : options
          ? (f.options || [])
              .map((s, i) => button("labPick", s, "", "choice", i))
              .join("")
          : field(
              t("yourAnswer") + " · " + names[state.to],
              '<textarea rows="2" id="labTyped"></textarea>',
            ) + button("labCheck", t("check"), "check", "primary")) +
      button("close", t("close"), "", "quiet"),
  );
}
function labAction(a, v) {
  if (a === "labHint") {
    const e = levelPractice().round?.entry;
    if (e && !e.feedback) {
      e.hinted = true;
      store();
      render();
    }
    return;
  }
  if (a === "labFocus") {
    pop(
      "<h2>" +
        t("hFocus") +
        "</h2><p>" +
        t("hNextSession") +
        "</p>" +
        ["focusMixed", ...Object.keys(focusPlans)]
          .map((k) =>
            button(
              "labSet",
              t(k),
              (practiceState().focus || "focusMixed") === k ? "check" : "",
              "rowbtn",
              k,
            ),
          )
          .join("") +
        button("close", t("close"), "", "quiet"),
    );
    return;
  }
  if (a === "labSet") {
    if (v === "focusMixed" || Object.hasOwn(focusPlans, v))
      practiceState().focus = v;
    store();
    closePop();
    render();
    return;
  }
  if (a === "labFilter") {
    bookFilter = v;
    openMistakes();
    return;
  }
  if (a === "labBook") {
    openMistakes();
    return;
  }
  if (a === "labDrill") {
    bookKey = v;
    const item = mistakeBook()[v];
    if (!item) return;
    bookChoice = { options: shuffled(item.q.options || []) };
    drillView();
    return;
  }
  const item = mistakeBook()[bookKey];
  if (!item) return;
  if (a === "labHear" || a === "labSlow") {
    speak(item.q.answers[0], a === "labSlow");
    return;
  }
  if (a === "labText") {
    bookChoice.asText = true;
    drillView();
    return;
  }
  if ((a === "labCheck" || a === "labPick") && !bookChoice.checked) {
    const q = item.q,
      text = (
        a === "labPick" ? bookChoice.options[Number(v)] : $("#labTyped").value
      )?.trim();
    if (!text) return;
    const ok = matchesPracticeAnswer(q, text, bookChoice.asText);
    Object.assign(bookChoice, {
      checked: true,
      ok,
      text,
      previous: item.wrong,
    });
    if (!ok) rememberMiss(q, text);
    else if (!bookChoice.asText) recoverMistake(item);
    store();
    drillView();
  }
}
