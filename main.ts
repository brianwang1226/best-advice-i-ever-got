import { mkdirSync, writeFileSync } from "node:fs";

const entry = `My driving instructor said, "Look where you want to go, not at what you're afraid of hitting," and twenty years later I still steer that way.`;

// The gate allows 1-200 characters: fail loudly instead of writing junk.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
