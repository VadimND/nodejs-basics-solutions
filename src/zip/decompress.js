import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const archivePath = join('src', 'zip', 'files', 'archive.gz');
    const outputPath = join('src', 'zip', 'files', 'fileToCompress.txt');

    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(outputPath);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File decompressed successfully!');
    });

    writeStream.on('error', (err) => {
        console.error('Error:', err.message);
    });

};

await decompress();