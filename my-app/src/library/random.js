const adjectives = ['lijep', 'zgodan', 'pametan'];
const nouns = ['ivan', 'keli', 'nesto'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounsIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounsIndex]}`;
}