const path = require('path');
console.log(path.sep);

console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))
console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'))
