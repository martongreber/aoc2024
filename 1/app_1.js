const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input_1.txt');

const data = fs.readFileSync(inputFilePath, 'utf-8');

const pairs = data.trim().split('\n').map(line => line.split('   ').map(Number));

const [a1, a2] = [pairs.map(pair => pair[0]), pairs.map(pair => pair[1])];

// Sort the arrays before calculating absolute differences
a1.sort((a, b) => a - b);
a2.sort((a, b) => a - b);

const result = a1.reduce((sum, value, index) => sum + Math.abs(value - a2[index]), 0);

console.log(result);