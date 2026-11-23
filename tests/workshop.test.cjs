const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");
const { runInNewContext } = require("node:vm");

function workshop() {
  const level = { mistakes: {} };
  const context = {
    state: { to: "de" },
    levelPractice: () => level,
    promptKey: (q) => q.cue,
    day: () => context.today,
    today: "2027-01-01",
  };
  runInNewContext(
    readFileSync(
      resolve(__dirname, "../app/src/main/assets/workshop.js"),
      "utf8",
    ),
    context,
  );
  return { level, context };
}

test("a repeat on the same day cannot graduate a mistake, and a new lapse resets it", () => {
  const { context, level } = workshop(),
    q = { cue: "I am here.", answers: ["Ich bin hier."] };
  context.rememberMiss(q, "Ich ist hier.");
  const item = level.mistakes[q.cue];
  context.recoverMistake(item);
  context.recoverMistake(item);
  assert.equal(item.finished, false);
  context.today = "2027-01-02";
  context.recoverMistake(item);
  assert.equal(item.finished, true);
  context.rememberMiss(q, "Ich sind hier.");
  assert.equal(level.mistakes[q.cue].firstDay, "");
  assert.equal(level.mistakes[q.cue].finished, false);
  assert.equal(level.mistakes[q.cue].count, 2);
});

test("grammar hints keep the rule but mask whole-word answers at punctuation and accents", () => {
  const { context } = workshop();
  const hint = (answer, why) =>
    context.hintFor({ kind: "grammar", answers: [answer], why }, {});
  assert.equal(
    hint("bin", "Bei ich schreibt man BIN."),
    "Bei ich schreibt man ___.",
  );
  assert.equal(hint("está", "Estar: está, no están."), "Estar: ___, no están.");
  assert.equal(
    hint("will call", "Use will call, then stop."),
    "Use ___, then stop.",
  );
});
