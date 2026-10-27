// Логика помодоро-таймера без привязки к DOM, чтобы её можно было тестировать.
export const WORK = 25 * 60;
export const BREAK = 5 * 60;
export const LONG_BREAK = 15 * 60;

/** 125 -> "02:05" */
export function format(sec) {
  const s = Math.max(0, Math.floor(sec));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/** Следующая фаза: после работы перерыв (каждый 4-й помидор длинный), после перерыва работа. */
export function nextPhase(phase, doneToday) {
  if (phase !== "work") return { phase: "work", seconds: WORK };
  return doneToday % 4 === 0
    ? { phase: "long", seconds: LONG_BREAK }
    : { phase: "break", seconds: BREAK };
}
