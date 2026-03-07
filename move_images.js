const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const collectionsDir = path.join(publicDir, 'collections');

if (!fs.existsSync(collectionsDir)) {
    fs.mkdirSync(collectionsDir);
}

const collections = [
    'urban-forge',
    'cobalt-meridian',
    'blue-tundra',
    'ruby-strata',
    'copper-drift',
    'urban-mist'
];

collections.forEach(col => {
    const colDir = path.join(collectionsDir, col);
    if (!fs.existsSync(colDir)) {
        fs.mkdirSync(colDir);
    }
});

const files = fs.readdirSync(publicDir);

files.forEach(file => {
    // Only process images
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
        let matchedCollection = null;
        for (const col of collections) {
            if (file.startsWith(col)) {
                matchedCollection = col;
                break;
            }
        }

        if (matchedCollection) {
            const oldPath = path.join(publicDir, file);
            let newFileName = file;

            // Standardize names a bit if we wanted, but let's just keep original names for now
            // and move them to the specific folder.
            const newPath = path.join(collectionsDir, matchedCollection, newFileName);

            fs.renameSync(oldPath, newPath);
            console.log(`Moved ${file} -> collections/${matchedCollection}/${newFileName}`);
        }
    }
});

console.log('Image organization complete.');
