const adjectives = ['beautiful', 'marvelous', 'friendly', 'nonchalant', 'classy', 'brainy', 'kind', 'wise', 'strong', 'impressive'];
const nouns = ['Ivan', 'David', 'Leon', 'Marko', 'Mateo', 'Ivona', 'Mia', 'Lara', 'Matea', 'Nika'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounsIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounsIndex]}`;
}