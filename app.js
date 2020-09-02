var args = require('minimist')(process.argv.slice(2));

let alphabet = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu"
};

let words = [];
args._.forEach(a => {
    words.push(
        a.replace(/[^a-zA-Z]/g, "").toUpperCase()
    );
});

console.log(`Translating words: ${words}`);

words.forEach(w => {
    var letters = [...w];
    letters.forEach(l => {
        console.log(`${l}\t${alphabet[l]}`);
    });
    console.log();
});