"use strict";

let inPractice = false;
const practiceState = () =>
  (track().practice ??= { goal: 7, days: {}, levels: {} });
const levelPractice = () =>
  (practiceState().levels[track().level] ??= {
    round: null,
    schedule: {},
    sequence: 0,
    last: null,
  });
const practiceNames = {
  recall: "pRecall",
  listen: "pListen",
  order: "pOrder",
  reading: "pRead",
  grammar: "grammar",
  write: "pWrite",
  bank: "pBank",
};
const practiceIcons = {
  recall: "repeat",
  listen: "volume",
  order: "layers",
  reading: "book",
  grammar: "settings",
  write: "pen",
  bank: "tag",
};

function recentDays() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - 6 + i);
    return d;
  });
}
function weekPanel() {
  const state = practiceState(),
    total = state.days[day()]?.count || 0;
  return (
    '<section class="weekpanel"><div class="split"><h2>' +
    t("pYourWeek") +
    "</h2>" +
    button("pGoal", t("pGoal") + " · " + state.goal, "settings", "goalbutton") +
    '</div><div class="weekdays">' +
    recentDays()
      .map((d) => {
        const key = day(d),
          count = state.days[key]?.count || 0,
          label = new Intl.DateTimeFormat(ui, { weekday: "short" }).format(d);
        return (
          '<div class="weekday ' +
          (key === day() ? "current " : "") +
          (count ? "worked" : "") +
          '" aria-label="' +
          esc(fmt(key) + " · " + count + " " + t("pTasks")) +
          '"><span>' +
          esc(label) +
          "</span><strong>" +
          (count || "·") +
          "</strong></div>"
        );
      })
      .join("") +
    "</div><small>" +
    t("today") +
    " · " +
    total +
    " / " +
    state.goal +
    " " +
    t("pTasks") +
    "</small></section>"
  );
}
function personalWords() {
  const d = track().dictionary;
  if (!d) return [];
  const due = Object.entries(d.progress)
    .filter(([, record]) => record.due <= Date.now())
    .sort(([, a], [, b]) => a.due - b.due)
    .map(([word]) => word);
  return [...new Set([...due, ...Object.keys(d.saved)])];
}
function practiceHome() {
  const cp = practiceState(),
    p = levelPractice(),
    round = p.round;
  if (personalWords().length) ensureAtlas();
  const i = round?.lead ?? ids()[p.sequence % ids().length],
    u = units[i];
  const pair = names[state.from] + " → " + names[state.to];
  return (
    '<div class="split dayheading"><h1>' +
    t("today") +
    "</h1>" +
    button("pair", pair, "globe", "routebtn") +
    "</div>" +
    '<section class="practicecover cover-' +
    state.to +
    '"><div class="coverphoto" aria-hidden="true"></div><div class="covercopy"><div class="coverlevel">' +
    esc(track().level) +
    "<span></span>" +
    t("pDaily") +
    '</div><h2 lang="' +
    state.to +
    '">' +
    esc(u.title[state.to]) +
    "</h2><p>" +
    esc(u.title[state.from]) +
    "</p>" +
    button("pStart", t(round ? "resume" : "pBegin"), "arrow", "primary") +
    "</div></section>" +
    '<button class="talklink" data-act="talkOpen"><i>' +
    icon("talk") +
    "</i><span><strong>" +
    t("pRoleplay") +
    "</strong><small>" +
    esc(conversations[track().level].title[state.from]) +
    "</small></span>" +
    icon("next") +
    "</button>" +
    bookJump() +
    weekPanel() +
    '<div class="split learnhead"><h2>' +
    t("studyPlan") +
    "</h2>" +
    button("tab", t("course"), "next", "quiet", "course") +
    "</div>" +
    levelButtons() +
    '<div class="knowledge"><button class="knowledge-row" data-act="tab" data-val="atlas"><i>Aa</i><span><strong>' +
    t("atlas") +
    "</strong><small>" +
    lexCount(10000) +
    " " +
    t("lexWords") +
    "</small></span>" +
    icon("arrow") +
    "</button>" +
    '<button class="knowledge-row" data-act="tab" data-val="review"><i>' +
    icon("repeat") +
    "</i><span><strong>" +
    t("review") +
    "</strong><small>" +
    t("due") +
    " · " +
    due().length +
    "</small></span>" +
    icon("arrow") +
    "</button></div>" +
    (p.last ? button("pLast", t("pLast"), "list", "quiet") : "")
  );
}
function promptKey(task) {
  return JSON.stringify([task.kind, task.unit, task.word ?? null]);
}
function makeTasks(lead) {
  const pool = [],
    from = state.from,
    to = state.to;
  const group = ids(),
    start = group.indexOf(lead),
    ordered = group.slice(start).concat(group.slice(0, start));
  for (const id of ordered) {
    const u = units[id],
      targets = u.translation[to];
    u.words[to].forEach((word, index) =>
      pool.push({
        kind: "recall",
        unit: id,
        word: index,
        cue: u.words[from][index],
        answers: [word],
      }),
    );
    pool.push({
      kind: "listen",
      unit: id,
      cue: first(u, from),
      answers: targets,
    });
    pool.push({
      kind: "order",
      unit: id,
      cue: first(u, from),
      answers: targets,
    });
    pool.push({
      kind: "reading",
      unit: id,
      cue: u.text[to],
      answers: [u.yes[to]],
      options: [u.yes[to], u.no[to]],
    });
    pool.push({
      kind: "write",
      unit: id,
      cue: u.prompt[from],
      answers: [u.model[to]],
    });
  }
  const rules = [
    grammar[track().level][to],
    ...additionalGrammar[track().level][to],
  ];
  rules.forEach((r, index) =>
    pool.push({
      kind: "grammar",
      unit: null,
      word: index,
      cue: r.prompt,
      answers: [r.options[0]],
      options: r.options,
      why: r.why[from],
    }),
  );
  if (atlas.key === to + from && atlas.rows) {
    for (const word of personalWords()) {
      const row = atlas.rows[atlas.index.get(word)];
      if (row)
        pool.push({
          kind: "bank",
          unit: null,
          word,
          cue: row[5][0][0].join(" / "),
          answers: [word],
        });
    }
  }
  return pool;
}
function composeRound() {
  const p = levelPractice(),
    size = practiceState().goal,
    lead = ids()[p.sequence % ids().length];
  const pool = makeTasks(lead),
    used = new Set(),
    queue = [],
    now = Date.now();
  const priority = (q) => {
    const m = p.schedule[promptKey(q)];
    if (!m) {
      if (q.kind === "bank" && lexDue(q.word)) return -1;
      if (
        q.kind === "recall" &&
        track().cards[q.unit + "." + q.word]?.due <= now
      )
        return -1;
      return 1;
    }
    if (m.due <= now) return m.stage === 0 ? -2 : -1;
    return 2;
  };
  const modes =
    size === 4
      ? ["recall", "listen", "order", "write"]
      : [
          "recall",
          "listen",
          "order",
          "reading",
          "grammar",
          "recall",
          "write",
          "listen",
          "reading",
          "order",
        ].slice(0, size);
  const plan = practiceModes(
    modes,
    size,
    pool.some((q) => q.kind === "bank"),
  );
  for (const [index, mode] of plan.entries()) {
    const choices = pool.filter(
      (q) => q.kind === mode && !used.has(promptKey(q)),
    );
    const ranked = choices.sort(
      (a, b) =>
        priority(a) - priority(b) ||
        (p.schedule[promptKey(a)]?.due || 0) -
          (p.schedule[promptKey(b)]?.due || 0),
    );
    const best = ranked.filter((q) => priority(q) === priority(ranked[0]));
    const fresh = best.filter((q) => !p.schedule[promptKey(q)]);
    // Keep new material close to the featured scene, while giving due reviews priority.
    const sceneWords = fresh.filter((q) => q.unit === lead);
    const candidates =
      ["recall", "reading", "write"].includes(mode) && sceneWords.length
        ? sceneWords
        : fresh;
    const item = candidates.length
      ? candidates[(index + p.sequence) % candidates.length]
      : ranked[0];
    if (!item) continue;
    used.add(promptKey(item));
    queue.push(item);
  }
  p.sequence++;
  return {
    id: Date.now(),
    lead,
    queue,
    base: queue.length,
    index: 0,
    log: [],
    entry: null,
  };
}
function beginQuestion(round) {
  const q = round.queue[round.index],
    words = q.kind === "order" ? q.answers[0].split(/\s+/) : [];
  const tokens = shuffled(words);
  if (tokens.length > 1 && tokens.join(" ") === words.join(" "))
    tokens.push(tokens.shift());
  round.entry = {
    text: "",
    picked: [],
    tokens,
    options: shuffled(q.options || []),
    feedback: null,
    asText: false,
  };
}
function shortAnswer(value) {
  return norm(value).replace(
    /^(?:(?:the|a|an|der|die|das|ein|eine|el|la|los|las|un|una)\s+)/,
    "",
  );
}
function questionView() {
  const r = levelPractice().round;
  if (!r) return recap(levelPractice().last);
  const q = r.queue[r.index],
    e = r.entry,
    f = e.feedback;
  const kind = t(practiceNames[q.kind]),
    idx = r.index + 1,
    numbered = idx + " / " + r.queue.length;
  let body = "";
  if (q.kind === "listen" && !e.asText) {
    body =
      '<div class="hearblock">' +
      button("pPlay", t("listen"), "volume", "playvoice") +
      button("pSlow", t("hSlow"), "", "soft") +
      button("pSwitch", t("pUseText"), "pen", "quiet") +
      "</div>";
  } else {
    body =
      '<p class="practicecue" lang="' +
      (q.kind === "reading" || q.kind === "grammar" ? state.to : state.from) +
      '">' +
      esc(q.cue) +
      "</p>";
  }
  if (!f) {
    if (q.options)
      body += e.options
        .map((s, i) => button("pPick", s, "", "choice", i))
        .join("");
    else if (q.kind === "order") {
      const tile = (action, id) =>
        button(action, e.tokens[id], "", "token", id);
      body +=
        '<div class="sentencearea" aria-label="' +
        t("yourAnswer") +
        '">' +
        (e.picked.length
          ? e.picked.map((i) => tile("pUndo", i)).join("")
          : "<small>" + t("pTap") + "</small>") +
        '</div><div class="tilebank">' +
        e.tokens
          .map((_, i) => (e.picked.includes(i) ? "" : tile("pToken", i)))
          .join("") +
        "</div>";
    } else
      body += field(
        t("yourAnswer") + " · " + names[state.to],
        '<textarea id="pAnswer" lang="' +
          state.to +
          '" rows="' +
          (q.kind === "write" ? 4 : 2) +
          '" autocomplete="off" spellcheck="' +
          (q.kind === "write" ? "true" : "false") +
          '">' +
          esc(e.text) +
          "</textarea>",
      );
    if (!q.options)
      body += button(
        "pCheck",
        t(q.kind === "write" ? "compare" : "check"),
        "check",
        "primary",
      );
  } else {
    body +=
      '<div role="status" class="coachfeedback ' +
      (f.ok === false ? "againstate" : "") +
      '"><strong>' +
      t(f.ok === null ? "model" : f.ok ? "correct" : "pCompare") +
      '</strong><p lang="' +
      state.to +
      '">' +
      esc(q.answers[0]) +
      "</p>" +
      (f.ok === false
        ? "<small>" + t("yourAnswer") + " · " + esc(f.text) + "</small>"
        : "") +
      (f.ok === false && answerDetail(q, f.text)
        ? "<small>" + esc(answerDetail(q, f.text)) + "</small>"
        : "") +
      (q.why ? "<small>" + esc(q.why) + "</small>" : "") +
      (q.kind === "write"
        ? "<small>" +
          esc(checklist(units[q.unit])) +
          "</small><p>" +
          esc(f.text) +
          "</p>"
        : "") +
      "</div>" +
      button(
        "pNext",
        t(idx === r.queue.length ? "finish" : "next"),
        "arrow",
        "primary",
      );
  }
  const instruction =
    q.kind === "listen" && e.asText
      ? "translationQ"
      : {
          recall: "pType",
          bank: "pType",
          listen: "typeHeard",
          order: "pArrange",
          reading: "readingQ",
          grammar: "ruletask",
          write: "pYourTurn",
        }[q.kind];
  return (
    '<div class="split practicebar">' +
    button("pPause", t("pause"), "back", "quiet") +
    "<strong>" +
    track().level +
    " · " +
    numbered +
    '</strong></div><progress class="progress" max="' +
    r.queue.length +
    '" value="' +
    r.index +
    '"></progress>' +
    '<section class="studio studio-' +
    q.kind +
    '"><div class="modeicon">' +
    icon(practiceIcons[q.kind]) +
    '</div><p class="turnlabel">' +
    t(q.retry ? "pRetry" : "pDaily") +
    "</p><h1>" +
    kind +
    '</h1><p class="instruction">' +
    t(instruction) +
    "</p>" +
    body +
    hintControl(q, e) +
    "</section>"
  );
}
function matchesPracticeAnswer(q, answer, asText) {
  const wordRecall = q.kind === "recall" || q.kind === "bank";
  const allowed = q.kind === "listen" && !asText ? [q.answers[0]] : q.answers;
  return allowed.some(
    (w) =>
      norm(w) === norm(answer) ||
      (wordRecall &&
        shortAnswer(answer) === norm(answer) &&
        shortAnswer(w) === norm(answer)),
  );
}
function gradePractice(r, q, answer) {
  const e = r.entry;
  if (e.feedback || !answer.trim()) return;
  const key = promptKey(q),
    p = levelPractice(),
    cp = practiceState(),
    date = day();
  const helped = !!e.hinted || (q.kind === "listen" && !!e.asText);
  let ok = null;
  if (q.kind !== "write") {
    ok = matchesPracticeAnswer(q, answer, e.asText);
    if (!ok && !q.retry) rememberMiss(q, answer);
    if (ok && !q.retry && !helped) recoverMistake(mistakeBook()[key]);
    // Only a first attempt schedules the next day's review. An immediate retry cannot erase a lapse.
    if (!q.retry) {
      const stage =
        ok && !helped
          ? Math.min((p.schedule[key]?.stage || 0) + 1, strengthDays.length)
          : 0;
      p.schedule[key] = {
        stage,
        due: Date.now() + (stage ? strengthDays[stage - 1] : 1) * 86400000,
      };
      if (q.kind === "recall") grade(q.unit + "." + q.word, ok && !helped);
      if (q.kind === "bank") gradeAtlasWord(q.word, ok && !helped);
      if (!ok)
        r.queue.splice(Math.min(r.index + 4, r.queue.length), 0, {
          ...q,
          retry: true,
        });
    }
  } else {
    track().entries[date + "/practice/" + r.id + "/" + r.index] = {
      unit: q.unit,
      text: answer,
      updated: Date.now(),
    };
    p.schedule[key] = { stage: 1, due: Date.now() + 86400000 };
  }
  const log = {
    kind: q.kind,
    ok,
    text: answer,
    model: q.answers[0],
    retry: !!q.retry,
    helped,
  };
  e.feedback = log;
  r.log.push(log);
  if (!q.retry) {
    const d = (cp.days[date] ??= { count: 0 });
    d.count++;
  }
  store();
  render();
}
function recap(last) {
  if (!last) return "";
  const first = last.log.filter((x) => !x.retry),
    marked = first.filter((x) => x.ok !== null && !x.helped),
    missed = first.filter((x) => x.ok === false);
  return (
    '<div class="recap"><div class="modeicon">' +
    icon("check") +
    "</div><h1>" +
    t("pComplete") +
    "</h1><p>" +
    t("pFirst") +
    '</p><strong class="resultscore">' +
    marked.filter((x) => x.ok).length +
    " / " +
    marked.length +
    "</strong><p>" +
    first.length +
    " " +
    t("pTasks") +
    "</p></div>" +
    (first.some((x) => x.helped)
      ? "<p>" +
        t("hAssisted") +
        " · " +
        first.filter((x) => x.helped).length +
        "</p>"
      : "") +
    (missed.length
      ? "<h2>" +
        t("pRevisit") +
        "</h2>" +
        missed
          .map(
            (x) =>
              '<div class="recaprow"><b>' +
              esc(x.model) +
              "</b><small>" +
              t("yourAnswer") +
              " · " +
              esc(x.text) +
              "</small></div>",
          )
          .join("")
      : "") +
    (first.some((x) => x.kind === "write")
      ? '<p class="section">' + t("pFiled") + "</p>"
      : "") +
    button("pHome", t("today"), "back", "primary")
  );
}
async function practiceAction(action, value) {
  const p = levelPractice(),
    r = p.round,
    q = r?.queue[r.index],
    e = r?.entry;
  switch (action) {
    case "pGoal":
      pop(
        "<h2>" +
          t("pGoal") +
          "</h2>" +
          [4, 7, 10]
            .map((g) =>
              button(
                "pSet",
                g + " " + t("pTasks"),
                practiceState().goal === g ? "check" : "",
                "rowbtn",
                g,
              ),
            )
            .join("") +
          button("close", t("close"), "", "quiet"),
      );
      return;
    case "pSet":
      if ([4, 7, 10].includes(Number(value)))
        practiceState().goal = Number(value);
      closePop();
      break;
    case "pStart":
      if (
        !p.round &&
        personalWords().length &&
        (atlas.key !== state.to + state.from || !atlas.rows)
      ) {
        const direction = state.from + state.to;
        await ensureAtlas();
        if (
          direction !== state.from + state.to ||
          levelPractice() !== p ||
          tab !== "today" ||
          inPractice ||
          conversationOpen
        )
          return;
      }
      if (!p.round) {
        p.round = composeRound();
        beginQuestion(p.round);
      }
      inPractice = true;
      break;
    case "pLast":
      pop(recap(p.last));
      return;
    case "pPause":
    case "pHome":
      closePop();
      inPractice = false;
      tab = "today";
      break;
    case "pSlow":
    case "pPlay":
      speak(q.answers[0], action === "pSlow");
      return;
    case "pSwitch":
      e.asText = true;
      break;
    case "pToken":
      if (e.feedback || e.picked.includes(+value)) return;
      e.picked.push(+value);
      store();
      render();
      return;
    case "pUndo":
      if (e.feedback) return;
      e.picked = e.picked.filter((i) => i !== +value);
      store();
      render();
      return;
    case "pPick":
      gradePractice(r, q, e.options[+value]);
      return;
    case "pCheck":
      gradePractice(
        r,
        q,
        q.kind === "order"
          ? e.picked.map((i) => e.tokens[i]).join(" ")
          : e.text,
      );
      return;
    case "pNext":
      if (!r || !e.feedback) return;
      r.index++;
      if (r.index === r.queue.length) {
        p.last = { log: r.log, day: day() };
        p.round = null;
      } else beginQuestion(r);
      break;
  }
  store();
  navigate();
}
function bindPractice() {
  const input = $("#pAnswer"),
    check = document.querySelector('[data-act="pCheck"]');
  if (!check) return;
  const round = levelPractice().round,
    entry = round.entry;
  const refresh = () => {
    check.disabled = input
      ? !input.value.trim()
      : entry.picked.length !== entry.tokens.length;
  };
  refresh();
  if (input)
    input.oninput = () => {
      entry.text = input.value;
      refresh();
      store();
    };
}

let conversationOpen = false,
  translationShown = false;
function currentConversation() {
  const p = levelPractice();
  return (p.conversation ??= { path: [] });
}
function conversationLines() {
  let node = conversations[track().level];
  const lines = [{ speaker: "pPartner", line: node.opening }];
  for (const pick of currentConversation().path) {
    node = node.paths[pick];
    lines.push(
      { speaker: "pYou", line: node.say },
      { speaker: "pPartner", line: node.reply },
    );
  }
  return { lines, node };
}
function conversationView() {
  const scene = conversations[track().level],
    { lines, node } = conversationLines();
  return (
    '<div class="split practicebar">' +
    button("talkExit", t("backTalk"), "back", "quiet") +
    "<b>" +
    track().level +
    '</b></div><section class="talktitle"><p>' +
    t("pRoleplay") +
    "</p><h1>" +
    esc(scene.title[state.to]) +
    "</h1><small>" +
    esc(scene.title[state.from]) +
    "</small></section>" +
    '<div class="talklines">' +
    lines
      .map(
        ({ speaker, line }, i) =>
          '<article class="bubble ' +
          (speaker === "pYou" ? "own" : "") +
          '"><div class="split"><b>' +
          t(speaker) +
          '</b><button type="button" data-act="talkSay" data-val="' +
          i +
          '" class="sayicon" aria-label="' +
          esc(t("listen") + " · " + line[state.to]) +
          '">' +
          icon("volume") +
          '</button></div><p lang="' +
          state.to +
          '">' +
          esc(line[state.to]) +
          "</p>" +
          (translationShown
            ? '<small lang="' +
              state.from +
              '">' +
              esc(line[state.from]) +
              "</small>"
            : "") +
          "</article>",
      )
      .join("") +
    "</div>" +
    button(
      "talkTranslate",
      t(translationShown ? "pHideLines" : "pShowLines"),
      "globe",
      "quiet",
    ) +
    (node.paths
      ? "<h2>" +
        t("pRespond") +
        '</h2><p class="talkhint">' +
        t("pSpeakFirst") +
        "</p>" +
        '<details class="talkhints"><summary>' +
        t("hStarters") +
        "</summary>" +
        node.paths
          .map(
            (b) =>
              "<p><small>" +
              esc(b.intent[state.from]) +
              "</small><b>" +
              esc(openingWords(b.say[state.to])) +
              "</b></p>",
          )
          .join("") +
        "</details>" +
        node.paths
          .map((b, i) =>
            button("talkChoose", b.intent[state.from], "", "choice", i),
          )
          .join("")
      : '<div class="actions">' +
        button("talkReset", t("pAnotherPath"), "repeat", "soft") +
        button("talkExit", t("today"), "check", "primary") +
        "</div>")
  );
}
function talkAction(action, value) {
  if (action === "talkOpen") {
    conversationOpen = true;
    translationShown = false;
  }
  if (action === "talkExit") conversationOpen = false;
  if (action === "talkReset") {
    currentConversation().path = [];
    translationShown = false;
  }
  if (action === "talkTranslate") {
    translationShown = !translationShown;
    render();
    return;
  }
  if (action === "talkSay") {
    speak(conversationLines().lines[Number(value)].line[state.to]);
    return;
  }
  if (action === "talkChoose") {
    const path = currentConversation().path;
    if (path.length >= 2 || !["0", "1"].includes(value)) return;
    path.push(Number(value));
    store();
    render();
    const replies = document.querySelectorAll(".bubble");
    replies[replies.length - 2]?.scrollIntoView({ block: "start" });
    return;
  }
  store();
  navigate();
}
