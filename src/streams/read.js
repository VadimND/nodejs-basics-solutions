import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
    const filePath = join('src', 'streams', 'files', 'fileToRead.txt');

    const stream = createReadStream(filePath, 'utf8');

    stream.pipe(process.stdout);

    stream.on('error', (err) => {
        console.error('Stream error:', err.message);
    });

    stream.on('end', () => {
        console.log('\n--- File was read ---');
    });
};

await read();