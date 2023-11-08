const fs = require('fs');
const path = require('path');

// Parse the command-line arguments
const [, , sourceDir, targetDir, ...extensions] = process.argv;

// Check if both source and target directories are provided
if (!sourceDir || !targetDir || extensions.length === 0) {
    console.log('>> node fileSystem.js <source_directory> <target_directory> <extensions...>');
    process.exit(1);
}

// Ensure the extensions start with a dot (e.g., ".txt", ".jpg")
const filteredExtensions = extensions.map((ext) => (ext.startsWith('.') ? ext : `.${ext}`));

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error(`Error reading source directory: ${err}`);
        process.exit(1);
    }

    // Filter files by the specified extensions
    const filteredFiles = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return filteredExtensions.includes(ext);
    });

    // Copy the filtered files to the target directory
    filteredFiles.forEach((file) => {
        const sourceFilePath = path.join(sourceDir, file);
        const targetFilePath = path.join(targetDir, file);

        fs.copyFile(sourceFilePath, targetFilePath, (err) => {
            if (err) {
                console.error(`Error copying file ${file}: ${err}`);
            } else {
                console.log(`Copied ${file} to ${targetDir}`);
            }
        });
    });
});
