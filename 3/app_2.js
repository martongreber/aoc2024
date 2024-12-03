const fs = require('fs');

function evaluateMultiplicationsPart2(input) {
    let mulEnabled = true; // Start with multiplications enabled
    let totalSum = 0;
    let i = 0;

    const mulRegex = /^mul\((\d{1,3}),(\d{1,3})\)/;

    while (i < input.length) {
        const match = input.slice(i).match(mulRegex);
        if (match && match.index === 0) {
            const x = parseInt(match[1], 10);
            const y = parseInt(match[2], 10);
            if (mulEnabled) totalSum += x * y;
            i += match[0].length;
        } else if (input.slice(i).startsWith("don't()")) {
            mulEnabled = false;
            i += 7;
        } else if (input.slice(i).startsWith("do()")) {
            mulEnabled = true;
            i += 4;
        } else {
            i++;
        }
    }

    return totalSum;
}

function processFileAsOneLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const concatenatedInput = fileContent.replace(/\n/g, '');
    return evaluateMultiplicationsPart2(concatenatedInput);
}

// Example usage
const result = processFileAsOneLine('input_2.txt');
console.log(result);