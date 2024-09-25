// Import 'path' module using the 'require()' method:
const path = require('path');

// Assigning a path to the myPath variable
//const myPath = '/home/summer/my/practice/node/internship/fCCArticle/module/path/app.js'
// relative path
const myPath = './app.js'

const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  fileExtension: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath),
  detailInfo: path.parse(myPath),
}

// Let's See The Results:
console.log(pathInfo);
