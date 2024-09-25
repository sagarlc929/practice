const fs = require('fs');

const data = "Hi, this is newFile.txt";

//fs.writeFile('./myFolder/myFile.txt', data, (err)=>{
// {flag: 'a'} indicates the writeFile() method to appedn the data
// at the end of the file instead of erasing the previous data 
// present in it.
fs.writeFile('./myFolder/myFile.txt', data, {flag: 'a'}, (err)=>{
  if(err){
    console.log(err);
    return;
  } else {
    console.log('Writen to file successfully!');
  }
});
