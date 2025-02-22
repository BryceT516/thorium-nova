import {randomFromList} from "./randomFromList";

const adjectives = [
  "Green",
  "Blue",
  "White",
  "Black",
  "Violet",
  "Indigo",
  "Lilac",
  "Azure",
  "Grey",
  "Golden",
  "Marigold",
  "Lavender",
  "Alabaster",
  "Vermillion",
  "Ivory",
  "Shimmering",
  "Rainbow",
  "Emerald",
  "Sapphire",
  "Dark",
  "Poor",
  "Lonely",
  "Glorious",
  "Magnificent",
  "Intrepid",
  "Bold",
  "Courageous",
  "Generous",
  "Brazen",
  "Resolute",
  "Reliable",
  "Battered",
  "Sensible",
  "Defiant",
  "Stoic",
  "Bittersweet",
  "Great",
  "Cautious",
  "Careful",
  "Spicy",
  "Lucky",
  "Pious",
  "Faithful",
  "Adventurous",
  "Merry",
  "Joyous",
  "Stalwart",
  "Wealthy",
  "Favorite",
  "Windswept",
  "Forgotten",
  "Unlucky",
  "Radiant",
  "Hopeful",
  "Distant",
  "Clever",
  "Honorable",
  "Radical",
  "Slippery",
  "Northern",
  "Southern",
  "Eastern",
  "Western",
  "Deepwater",
  "Blessed",
  "Valiant",
  "Noble",
  "Thoughtful",
  "Steely",
  "Sanguine",
  "Sunny",
  "Chiseled",
  "Stormy",
  "Endless",
  "Infinite",
  "Diligent",
  "Patient",
  "Wistful",
  "Wise",
  "Graceful",
  "Subtle",
  "Broken",
  "Mighty",
  "Precious",
  "Misty",
  "Cold",
  "Stern",
  "Triumphant",
  "Steady",
  "Old",
  "Lovely",
  "Chastened",
  "Happy",
  "Laughing",
  "Winged",
  "Calico",
  "Crackling",
  "Hidden",
  "Good",
  "Prodigal",
  "Heavy",
  "Arcane",
  "Forever",
  "Scattered",
  "Obsidian",
  "Last",
  "Elder",
  "Younger",
  "Fuzzy",
  "Exotic",
  "Quick",
  "Amazing",
  "Tiny",
  "Grand",
  "Icy",
  "Deep",
  "Sassy",
  "Stark",
  "Windy",
  "Snowy",
  "Fair",
  "Pure",
  "Loyal",
  "Inca",
  "Mayan",
  "Atlantean",
  "Roman",
  "Byzantine",
  "Zulu",
  "Maori",
  "Prussian",
  "Smoky",
  "Cloudy",
  "Silly",
  "Leaky",
  "African",
  "Etruscan",
  "Trojan",
  "Unknown",
  "Saucy",
  "Seawise",
  "Legendary",
  "Royal",
  "New",
  "Dreamy",
  "Peaceful",
  "Thorny",
  "Moorish",
  "Portside",
  "Starboard",
  "Topside",
];

const singularNouns = [
  "Star",
  "Sun",
  "Sky",
  "Moon",
  "Nova",
  "Corona",
  "Photon",
  "Aurora",
  "Void",
  "Shockwave",
  "Cloud",
  "Nebula",
  "Quasar",
  "Pulsar",
  "Horizon",
  "Zenith",
  "Comet",
  "Flare",
  "Energy",
  "Galaxy",
  "Ring",
  "Blade",
  "Sword",
  "Light",
  "Flash",
  "Dance",
  "Flood",
  "Bounty",
  "Castle",
  "Temple",
  "Spirit",
  "Trail",
  "Flight",
  "Heart",
  "Pennant",
  "Harvest",
  "Nymph",
  "Mermaid",
  "Siren",
  "Anchor",
  "Hammerhead",
  "Lion",
  "Lioness",
  "Eagle",
  "Silhouette",
  "Guardian",
  "God",
  "Tower",
  "Pillar",
  "Hero",
  "Quest",
  "Journey",
  "Matrix",
  "Palace",
  "Pyramid",
  "Goblet",
  "Sunset",
  "Sunrise",
  "Fish",
  "Symbol",
  "Mark",
  "Realm",
  "Tree",
  "Crossing",
  "Shadow",
  "Swan",
  "Forge",
  "Banner",
  "Voyage",
  "Rose",
  "Song",
  "Raven",
  "Point",
  "Mountain",
  "Island",
  "Forest",
  "Carnation",
  "Gaze",
  "Ship",
  "Cave",
  "Phoenix",
  "Soul",
  "Teacup",
  "Muse",
  "Chest",
  "Courser",
  "Katana",
  "God",
  "Goddess",
  "Hoard",
  "Jumper",
  "Rider",
  "Chaser",
  "Dancer",
  "Seeker",
  "Explorer",
  "Lover",
  "Hunter",
  "Beater",
  "Racer",
  "Piercer",
  "Charger",
  "Speeder",
  "Falcon",
  "Paladin",
  "Cavalier",
  "Spear",
  "Surfer",
  "Strider",
  "Genie",
  "Caravan",
  "Dreamer",
  "Folly",
  "Money Pit",
  "Beauty",
  "Mule",
  "Work Horse",
  "Moneymaker",
  "Starship",
  "Hauler",
  "Beater",
  "Fortune",
  "Dream",
  "Pride",
  "Gamble",
  "Downfall",
  "Regret",
  "Savior",
  "Miracle",
  "Last Chance",
  "Last Stand",
  "Adventure",
  "Jewel",
  "Surprise",
  "Cutter",
  "Cruiser",
  "Spice",
  "Canyon",
  "Tiger",
  "Start",
  "Angel",
  "Son",
  "Boy",
  "Daughter",
  "Girl",
  "Arrow",
  "Bolt",
  "Scholar",
  "Home",
  "Namer",
  "Sting",
  "Apprentice",
  "Walrus",
  "Schooner",
  "Pony",
  "Stick",
  "Wallet",
  "Cone",
  "Carnival",
  "Crossing",
  "Chapel",
  "Echo",
  "Name",
  "Bear",
  "Storm",
  "Bucket",
  "Bilge",
  "Wheel",
  "Wizard",
  "Wall",
  "Unicorn",
  "Gem",
  "Oath",
  "Ghost",
  "Engine",
  "Scallop",
  "Kiwi",
  "Gambit",
  "Pearl",
  "Day",
  "Maid",
  "Mare",
  "Citadel",
  "Dart",
  "Giant",
  "Pioneer",
  "Freehold",
  "Sentry",
  "Sentinel",
  "Zephyr",
  "Terminus",
  "Pinecone",
  "Sickle",
  "Ladybug",
  "Enchantress",
  "Pilgrim",
  "Alligator",
  "Legend",
  "Cutter",
  "Dune",
  "Obelisk",
];
const pluralNouns = [
  "Men",
  "Women",
  "Stars",
  "Dreams",
  "Waves",
  "Dragons",
  "Secrets",
  "Whispers",
  "Storms",
  "Eyes",
  "Hands",
  "Riches",
  "Changes",
  "Worlds",
  "Words",
  "Echoes",
  "Winds",
  "Leaves",
  "Clouds",
  "Legends",
  "Sails",
  "Beasts",
  "Oceans",
  "Idols",
  "Faces",
  "Names",
  "Thoughts",
  "Roses",
  "Coins",
  "Cups",
  "Wands",
  "Swords",
  "Wings",
  "Tears",
  "Flags",
  "Scars",
  "Tongues",
  "Deeds",
  "Ways",
  "Means",
  "Mysteries",
  "Wonders",
  "Fools",
  "Souls",
  "Roots",
  "Fronds",
  "Branches",
  "Vines",
  "Flowers",
  "Stones",
  "Seas",
  "Smiles",
  "Bees",
  "Sounds",
  "Paths",
  "Feathers",
  "Chants",
  "Sparkles",
  "Skies",
  "Stories",
  "Roads",
  "Keys",
  "Spades",
  "Diamonds",
  "Hearts",
  "Clubs",
  "Wisps",
  "Numbers",
  "Memories",
  "Wheels",
  "Strings",
  "Lands",
  "Eggs",
  "Hills",
  "Mountains",
  "Lakes",
  "Tiles",
  "Cords",
  "Knots",
  "Songs",
  "Nails",
  "Sheets",
  "Books",
  "Pages",
  "Knobs",
  "Voices",
  "Sparks",
  "Shores",
  "Tides",
  "Forms",
  "Motes",
  "Ladies",
  "Princesses",
  "Queens",
  "Empresses",
  "Duchesses",
  "Mistresses",
  "Lords",
  "Princes",
  "Kings",
  "Emperors",
  "Dukes",
  "Barons",
  "Masters",
];
const nounsOfIndeteminateQuantity = [
  "Jade",
  "Rain",
  "Dominion",
  "Leviathan",
  "Salvation",
  "Fate",
  "Change",
  "Sorrow",
  "Glass",
  "Crystal",
  "Heaven",
  "Sand",
  "Moonlight",
  "Dawn",
  "Dusk",
  "Mystery",
  "Magic",
  "Fire",
  "Ice",
  "Water",
  "Starlight",
  "Lightning",
  "Thunder",
  "Steel",
  "Glory",
  "Stone",
  "Bravery",
  "Poetry",
  "Promise",
  "Beauty",
  "Mirth",
  "Olympus",
  "Light",
  "Charity",
  "Mercy",
  "Hope",
  "Virtue",
  "Fortitude",
  "Enlightenment",
  "Might",
  "Destiny",
  "Grass",
  "Clarity",
  "Serenity",
  "Tranquility",
  "Paradise",
  "Contentment",
  "Strength",
  "Power",
  "Salt",
  "Atlantis",
  "Herring",
  "Doubt",
  "Flint",
  "Spring",
  "Summer",
  "Autumn",
  "Winter",
  "Snow",
  "Time",
  "Space",
  "Paper",
  "Rice",
  "Wheat",
  "Bread",
  "Cheddar",
  "Motion",
  "Ash",
  "Sagebrush",
  "Lead",
  "Tin",
  "Copper",
  "Bronze",
  "Brass",
  "Silver",
  "Gold",
  "Cloth",
  "Junk",
  "Logic",
  "Silence",
  "Wine",
  "Money",
  "Slate",
  "Graphite",
  "Cobalt",
  "Platinum",
  "Wood",
  "Ore",
  "Grain",
  "Fission",
  "Fusion",
  "Life",
  "Hair",
  "Smoke",
  "Essence",
  "Clay",
  "Myth",
  "Victory",
  "Defiance",
  "Borneo",
  "Grace",
];

const pluralQuantities = [
  "Double",
  "Twin",
  "Two",
  "Three",
  "Triple",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Twenty",
  "Fifty",
  "One Hundred",
  "One Thousand",
  "Many",
  "So Many",
  "Too Many",
  "No More",
  "Several",
  "Numerous",
  "Infinite",
  "Enough",
  "All the",
];
const sometimesASuccessor = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  " II",
  " III",
];
const maleTitles = [
  "Lord",
  "Prince",
  "King",
  "Emperor",
  "Duke",
  "Baron",
  "Master",
];
const femaleTitles = [
  "Lady",
  "Princess",
  "Queen",
  "Empress",
  "Duchess",
  "Mistress",
];
const genderNeutralTitles = [
  "Saint",
  "Captain",
  "Champion",
  "Admiral",
  "Sovereign",
  "Commodore",
];
function allTitles() {
  return maleTitles.concat(femaleTitles).concat(genderNeutralTitles);
}
function concat(...args: string[][]) {
  return args.reduce((prev: string[], next) => prev.concat(next), []);
}

function civilian1() {
  return `${randomFromList(
    concat(adjectives, singularNouns, nounsOfIndeteminateQuantity)
  )} ${randomFromList(concat(singularNouns, pluralNouns))}`;
}
function civilian2() {
  return `${randomFromList(pluralQuantities)} ${randomFromList(pluralNouns)}`;
}
function civilian3() {
  return `${randomFromList(concat(singularNouns, adjectives))} ${randomFromList(
    allTitles()
  )}${randomFromList(sometimesASuccessor)}`;
}

export function randomNameGenerator() {
  return randomFromList([civilian1, civilian2, civilian3])();
}
