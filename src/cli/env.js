const parseEnv = () => {
    const rssEnv = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    if (rssEnv) {
        console.log(rssEnv);
    } else {
        console.log('No RSS_ environment variables found.');
    }
};

// Set test variables
process.env.RSS_NAME = "test";
process.env.RSS_PORT = "1234";

// Check: node src/cli/env.js

parseEnv();