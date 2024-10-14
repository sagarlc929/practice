import  fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname; // Get the current file path
const __dirname = path.dirname(__filename); // Get the directory name


const userInfoPath = path.join(__dirname, '../database.json');

export function readUsersFile(){
  const userData = fs.readFileSync(userInfoPath, 'utf8');
  return JSON.parse(userData);
}

export function writeUsersFile(users){
  const updatedUserFileContent = JSON.stringify(users,null, 2);
  fs.writeFileSync(userInfoPath, updatedUserFileContent, 'utf8');
}
