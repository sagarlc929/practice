//Import fs module
const fs = require('fs');

// Present Working Directory: /home/summer/my/practice/node .. module/fs
// Making a new directory called ./myFolder:

fs.mkdir('./myFolder', (err) => {
  if(err){
    console.log(err);
  } else {
    console.log('Folder Created Successfully');
  }
});
