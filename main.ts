import { mkdirSync, writeFileSync } from "node:fs";

// The best advice I ever got, from my driving instructor on my first
// lesson: aim at where you want to end up, not at what you fear hitting.
// One sentence, 141 characters — inside the 200-character gate.
const entry = `My driving instructor said, "Look where you want to go, not at what you're afraid of hitting," and twenty years later I still steer that way.`;

// The gate allows 1-200 characters: fail loudly instead of writing junk.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
