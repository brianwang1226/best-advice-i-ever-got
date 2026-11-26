import { mkdirSync, writeFileSync } from "node:fs";

const entry = `My driving instructor said, "Look where you want to go, not at what you're afraid of hitting," and twenty years later I still steer that way.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
