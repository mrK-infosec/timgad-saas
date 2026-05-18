const fs = require('fs');
const path = require('path');

const oldPath = path.join(__dirname, 'app', '(dashboard)');
const newPath = path.join(__dirname, 'app', 'dashboard');

try {
  fs.renameSync(oldPath, newPath);
  console.log('Successfully renamed folder!');
} catch (e) {
  console.error('Rename failed:', e);
}
