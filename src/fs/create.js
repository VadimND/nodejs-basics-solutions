import { promises as fs } from 'fs';

const create = async () => {
    const filePath = 'src/fs/files/fresh.txt';
    const text = 'I am fresh and young';

    try {
        await fs.writeFile(filePath, text, { flag: 'wx' });
    } catch (err) {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
    }
};

await create();