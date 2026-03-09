const fs = require('fs');
const path = require('path');

const weightMap = {
  '200': 'var(--weight-light)',
  '300': 'var(--weight-light)',
  '400': 'var(--weight-regular)',
  '500': 'var(--weight-medium)',
  '600': 'var(--weight-bold)',
  '700': 'var(--weight-bold)',
  '800': 'var(--weight-extrabold)',
  '900': 'var(--weight-black)'
};

function replaceStringInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Replace font-weight: <number>;
  newContent = newContent.replace(/font-weight:\s*(200|300|400|500|600|700|800|900)\s*;/g, (match, p1) => {
    return `font-weight: ${weightMap[p1]};`;
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated numeric font-weight in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        walkDir(fullPath);
      }
    } else if (fullPath.endsWith('.css')) {
      replaceStringInFile(fullPath);
    }
  }
}

walkDir('c:\\\\Users\\\\WORK\\\\Desktop\\\\PROJECT EVERLOOPS\\\\everloop-carpet\\\\src');
console.log('Done.');
