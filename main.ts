// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one funny line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't eat your sock. I was conducting a thorough internal investigation, and the evidence was delicious.";

// Guard: the entry must be one non-blank line of 1–200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
