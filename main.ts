// Warning Label for Humans: One Line, Big Laugh
// Entry: a single-line safety warning label printed on every human being.
// The label is a constant — no input, no randomness, deterministic output.
// Gate: the entry must be 1-160 UTF-8 characters, so the label is kept
// short and single-line by construction (no trailing newline is written).
import { mkdirSync, writeFileSync } from "node:fs";

// One idea, label wording throughout, punch in the last few words:
// a factory defect that makes the unit argue with strangers online.
function buildLabel(): string {
  return (
    "WARNING: This human ships with no user manual, no mute button, " +
    "and a factory defect that makes it argue with strangers online."
  );
}

const LABEL = buildLabel();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
