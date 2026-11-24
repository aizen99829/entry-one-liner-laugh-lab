// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one funny line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't eat your sock. I was conducting a thorough internal investigation, and the evidence was delicious.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
