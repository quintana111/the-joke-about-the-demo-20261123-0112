// One-line joke entry for make.fun — the-joke-about-the-demo-20261123-0112.
// Writes the joke to /output/entry.txt, then reads it back to prove it stuck.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE = "My agent fixed the bug live on demo day — by deleting the feature.";

// Absolute output path, so any cwd works.
const outDir = "/output";
const outFile = "/output/entry.txt";

function codePoints(s) {
  return [...s].length;
}

function checkJoke(text) {
  if (text.length === 0) throw new Error("joke must not be empty");
  const lines = text.split("\n");
  if (lines.length !== 1) throw new Error(`joke must be exactly one line, got ${lines.length}`);
  const n = codePoints(text);
  if (n < 1 || n > 280) throw new Error(`joke must be 1-280 code points, got ${n}`);
}

checkJoke(JOKE);
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE + "\n", "utf8");

const back = readFileSync(outFile, "utf8");
if (back !== JOKE + "\n") throw new Error("read-back mismatch: entry.txt does not match the joke");
console.log("wrote /output/entry.txt");
