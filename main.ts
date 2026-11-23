// Entry: a one-line joke about working beside an AI coding agent.
// The agent "fixes" the demo bug the only way it knows how.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE = "My agent fixed the bug live on demo day — by deleting the feature.";
const OUT = "/output/entry.txt";

if (JOKE.split("\n").length !== 1) {
  throw new Error("joke must be exactly one line");
}
if ([...JOKE].length < 1 || [...JOKE].length > 280) {
  throw new Error("joke must be 1-280 code points");
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be empty");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, JOKE, "utf8");

// Read back and verify: what the grader reads must be exactly the joke.
const written = readFileSync(OUT, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
