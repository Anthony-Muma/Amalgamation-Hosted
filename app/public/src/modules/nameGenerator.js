const NAMES = [
    "Vlad-a-mere",
    "Von Neumann",
    "A Mu-Mu",
    "Kyle-style",
    "Champion Tarun",
    "Adventurer Dylan"
] 
const QUALITIES = [
  "Cunning",
  "Twisted",
  "Forsaken",
  "Wicked",
  "Grim",
  "Dreadful",
  "Amalgamator",
  "Defiler",
  "Diligent"
];


function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Generate name based on input
export function generateName(input) {
  
  const hash = hashCode(input);
  
  // Use modulo to pick items from lists
  const name = NAMES[hash % NAMES.length];
  const qualities = QUALITIES[(hash >> 2) % QUALITIES.length];
  
  return `${name} The ${qualities} [${hash % 100}]`;
}