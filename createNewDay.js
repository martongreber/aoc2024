const fs = require('fs');
const path = require('path');

const baseDir = __dirname; // Root directory for the numbered folders

// Function to get the next folder number
const getNextDayNumber = () => {
    const folders = fs.readdirSync(baseDir).filter((file) =>
        fs.statSync(path.join(baseDir, file)).isDirectory() && !isNaN(file)
    );

    const numbers = folders.map(Number).filter((n) => !isNaN(n));
    return numbers.length ? Math.max(...numbers) + 1 : 1;
};

// Function to create a new day's folder with required files
const createNewDay = () => {
    const dayNumber = getNextDayNumber();
    const dayFolder = path.join(baseDir, dayNumber.toString());

    // Create the new folder
    fs.mkdirSync(dayFolder);

    // Create required files
    const files = [
        { name: 'app_1.js', content: '' },
        { name: 'app_2.js', content: '' },
        { name: 'input_1.txt', content: '' },
        { name: 'input_2.txt', content: '' },
    ];

    files.forEach((file) => {
        const filePath = path.join(dayFolder, file.name);
        fs.writeFileSync(filePath, file.content);
    });

    console.log(`Day ${dayNumber} folder created with required files.`);
};

// Run the script
createNewDay();