import fs from 'fs';
import path from 'path';

const publicDir = 'C:\\Users\\WORK\\Desktop\\PROJECT EVERLOOPS\\everloop-carpet\\public';
const sourceCollectionsDir = 'C:\\Users\\WORK\\Desktop\\PROJECT EVERLOOPS\\collections';
const targetCollectionsDir = path.join(publicDir, 'collections');

// 1. Delete all images from public except logo.png, hero-bg.jpg, and vite.svg
const files = fs.readdirSync(publicDir);

for (const file of files) {
    const filePath = path.join(publicDir, file);

    if (fs.statSync(filePath).isFile()) {
        const isImage = /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file);
        const isProtected = ['logo.png', 'hero-bg.jpg', 'vite.svg'].includes(file);

        if (isImage && !isProtected) {
            console.log(`Deleting: ${file}`);
            fs.unlinkSync(filePath);
        }
    }
}

// 2. Move collections folder to public/collections
if (fs.existsSync(sourceCollectionsDir)) {
    console.log(`Moving ${sourceCollectionsDir} to ${targetCollectionsDir}...`);
    fs.renameSync(sourceCollectionsDir, targetCollectionsDir);
    console.log('Successfully moved collections folder.');
} else if (fs.existsSync(targetCollectionsDir)) {
    console.log('Target collections folder already exists in public.');
} else {
    console.log('Source collections folder not found.');
}

console.log('Done.');
