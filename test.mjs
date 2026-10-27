import assert from "node:assert/strict";
import { BREAK, LONG_BREAK, WORK, format, nextPhase } from "./timer.js";

assert.equal(format(125), "02:05");
assert.equal(format(0), "00:00");
assert.equal(format(-5), "00:00");
assert.deepEqual(nextPhase("work", 1), { phase: "break", seconds: BREAK });
assert.deepEqual(nextPhase("work", 4), { phase: "long", seconds: LONG_BREAK });
assert.deepEqual(nextPhase("break", 1), { phase: "work", seconds: WORK });
console.log("ok");
