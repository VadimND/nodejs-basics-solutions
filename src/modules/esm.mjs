import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { readFile } from "fs/promises";
import("./files/c.cjs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject = {};

const filePath =
  random > 0.5
    ? path.join(__dirname, "./files/a.json")
    : path.join(__dirname, "./files/b.json");

try {
  const fileData = await readFile(filePath, "utf-8");
  unknownObject = JSON.parse(fileData);
} catch (err) {
  console.error("Failed to load JSON:", err);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
