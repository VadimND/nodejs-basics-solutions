import { createWriteStream } from 'fs';
import { join } from 'path';

const write = async () => {
    const filePath = join('src', 'streams', 'files', 'fileToWrite.txt');

    const stream = createWriteStream(filePath, { flags: 'a' }); // Append mode

    process.stdin.pipe(stream);

    stream.on('finish', () => {
        console.log('Data written to file successfully!');
    });

    stream.on('error', (err) => {
        console.error('Error:', err.message);
    });

};

await write();