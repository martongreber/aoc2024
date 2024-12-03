const fs = require('fs');

let totalSum = 0;

fs.readFile('input_1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split('\n');

    // Regex to match 'mul(x,y)' where x and y are 1, 2, or 3-digit numbers
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

    lines.forEach(line => {
        let match;
        // Iterate through all matches in the line
        while ((match = regex.exec(line)) !== null) {
            const x = parseInt(match[1], 10);
            const y = parseInt(match[2], 10);
            totalSum += x * y;
        }
    });

    console.log(totalSum);
});