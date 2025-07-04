import fs from "node:fs/promises";
import path from "node:path";

export async function getContentBySlug(folder: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    "src/content",
    folder,
    `${slug}.json`
  );
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}
