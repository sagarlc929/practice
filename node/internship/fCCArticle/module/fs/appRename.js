// Syntax: fs.rename(oldPath, newPath, callback);

const fs = require('fs');

fs.rename('./myFolder/myFile.txt', './myFolder/myFileAsync.txt', (err) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('File renamed successfully!');

});
