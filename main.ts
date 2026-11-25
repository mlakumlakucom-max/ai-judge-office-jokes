import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My calendar finally showed a free hour, so I booked a meeting to celebrate it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
console.log(joke);
