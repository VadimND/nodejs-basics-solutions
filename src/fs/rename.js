import { promises as fs } from "fs";
import { join } from "path";

const rename = async () => {
  const srcPath = join("src", "fs", "files", "wrongFilename.txt");
  const destPath = join("src", "fs", "files", "properFilename.md");

  try {
    await fs.access(srcPath);

    try {
      await fs.access(destPath);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }

    await fs.rename(srcPath, destPath);

    console.log("File renamed successfully!");
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
