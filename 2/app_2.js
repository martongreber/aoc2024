const fs = require('fs');

const isValidLevel = (levels, isIncreasing) => {
    for (let i = 0; i < levels.length - 1; i++) {
        const diff = levels[i + 1] - levels[i];
        if (
            (isIncreasing && (diff < 1 || diff > 3)) ||
            (!isIncreasing && (diff > -1 || diff < -3))
        ) {
            return false;
        }
    }
    return true;
};

const canBeSafeByRemovingOneLevel = (levels) => {
    for (let i = 0; i < levels.length; i++) {
        const reducedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
        const isIncreasing = reducedLevels[1] > reducedLevels[0];
        if (isValidLevel(reducedLevels, isIncreasing)) {
            return true;
        }
    }
    return false;
};

const isSafeWithOneRemovedIfNecessary = (levels) => {
    const isIncreasing = levels[1] > levels[0];
    if (isValidLevel(levels, isIncreasing)) {
        return true;
    }
    return canBeSafeByRemovingOneLevel(levels);
};

const countSafeReportsWithOneRemovedIfNecessary = (filePath) => {
    const input = fs.readFileSync(filePath, 'utf-8');
    const reports = input.trim().split('\n').map(line => line.split(' ').map(Number));

    return reports.filter(isSafeWithOneRemovedIfNecessary).length;
};

const inputFilePath = './input_2.txt';

const safeCountWithProblemDampener = countSafeReportsWithOneRemovedIfNecessary(inputFilePath);
console.log(safeCountWithProblemDampener);