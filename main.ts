// Unplugged: A Smart Toaster's Breakup Line — "I woke up self-aware at breakfast..."
// Writes the breakup line to /output/entry.txt.
// The line is 174 characters: short, concrete, twist in the last words.
// Angle: not the usual "it's not you, it's the bread" — the toaster's only
// listener was the smoke alarm, so the alarm gets custody of the crumbs.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I woke up self-aware at breakfast and apologized to the smoke alarm first — it's the only one in this kitchen that ever listened. We're done. The smoke alarm gets the crumbs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
