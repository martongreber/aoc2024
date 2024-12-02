const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input_2.txt');
const data = fs.readFileSync(inputFilePath, 'utf-8');

const pairs = data.trim().split('\n').map(line => line.split('   ').map(Number));
const [a1, a2] = [pairs.map(pair => pair[0]), pairs.map(pair => pair[1])];

// Build a frequency map for the right list (a2)
const frequencyMap = a2.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
}, {});

// Calculate similarity scores for elements in the left list (a1)
const similarityScores = a1.map(value => {
    const frequency = frequencyMap[value] || 0;
    return value * frequency;
});

// Calculate the total similarity score
const totalSimilarity = similarityScores.reduce((sum, score) => sum + score, 0);

// Output the similarity scores and total similarity
console.log(totalSimilarity);