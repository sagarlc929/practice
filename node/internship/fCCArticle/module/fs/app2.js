const fs = require('fs');
//fs.readFile('./myFolder/myFile.txt', {encoding: 'utf-8'}, (err, data) => {
fs.readFile('./myFolder/myFile.txt', {encoding: ''}, (err, data) => {
  if (err){
    console.log(err);
    return;
  } else {
    console.log('File read successfully! Here is the data!');
  }
});
