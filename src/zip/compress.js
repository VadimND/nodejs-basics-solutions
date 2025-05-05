import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { createGzip } from "zlib";

const compress = async () => {
  const filePath = join("src", "zip", "files", "fileToCompress.txt");
  const archivePath = join("src", "zip", "files", "archive.gz");

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(archivePath);
  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("File compressed successfully!");
  });

  writeStream.on("error", (err) => {
    console.error("Error:", err.message);
  });
};

await compress();
