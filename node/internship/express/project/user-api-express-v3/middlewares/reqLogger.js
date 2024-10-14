import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname; // Get the current file path
const __dirname = path.dirname(__filename); // Get the directory name

export const reqLogger = (req,res,next)=>{
  const logFilePath = path.resolve(__dirname, '../log/ipLog.json'); 
  const logFileRead = fs.readFileSync(logFilePath, 'utf8');
  const logData = JSON.parse(logFileRead);
  const newLogEntry = {
    ip: req.ip,
    method: req.method,
    route: req.url,
    time: new Date().toISOString()
  }
  logData.push(newLogEntry);
  // const updatedLogData = [...logData, {ip: req.ip}];
  fs.writeFileSync(logFilePath, JSON.stringify(logData, null , 2), 'utf8');
  next();
}

