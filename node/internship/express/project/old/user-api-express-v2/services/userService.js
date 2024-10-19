const fs = require('fs');
const path = require('path');
const userInfoPath = path.join(__dirname, '../database.json');

function readUsersFile(){
  const userData = fs.readFileSync(userInfoPath, 'utf8');
  return JSON.parse(userData);
}

function writeUsersFile(users){
  const updatedUserFileContent = JSON.stringify(users,null, 2);
  fs.writeFileSync(userInfoPath, updatedUserFileContent, 'utf8');
}
module.exports = { readUsersFile, writeUsersFile };
