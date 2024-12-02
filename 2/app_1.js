const fs = require('fs');

const isSafe = (levels) => {
    if (levels.length < 2) return false;

    const first = levels[0];
    const last = levels[levels.length - 1];

    if (first === last) return false; // No clear direction, short circuit

    const isIncreasing = last > first;

    for (let i = 0; i < levels.length - 1; i++) {
        const current = levels[i];
        const next = levels[i + 1];
        const diff = next - current;

        if (isIncreasing) {
            if (diff < 1 || diff > 3) return false; // Difference must be between 1 and 3
        } else {
            if (diff > -1 || diff < -3) return false; // Difference must be between -3 and -1
        }
    }

    return true; // All conditions met
};

// Function to count the number of safe levels
const countSafeLevels = (filePath) => {
    const input = fs.readFileSync(filePath, 'utf-8');
    const reports = input.trim().split('\n').map(line => line.split(' ').map(Number));

    return reports.filter(isSafe).length;
};

const inputFilePath = './input_1.txt';

const safeCount = countSafeLevels(inputFilePath);
console.log(safeCount);