import { promises as fs } from "fs";
import { join } from "path";

const read = async () => {
  const filePath = join("src", "fs", "files", "fileToRead.txt");

  try {
    await fs.access(filePath);

    const info = await fs.readFile(filePath, "utf8");

    console.log(info);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
