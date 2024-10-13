const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const PORT = 5000;
const userInfoPath = path.join(__dirname, 'usersInfo.json');

function readUsersFile(){
  const userData = fs.readFileSync(userInfoPath, 'utf8');
  return JSON.parse(userData);
}

function writeUsersFile(users){
const updatedUsersFileContent = JSON.stringify(users);
  fs.writeFileSync(userInfoPath, updatedUsersFileContent, 'utf8');
}

const server = http.createServer((req,res)=>{
  console.log("request", req.url, req.method);
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if(req.method === 'OPTIONS'){
    res.writeHead(204);
    res.end();
    return;
  }

  // create
  if(req.url === '/api/users' && req.method === 'POST'){
    let body = '';
    req.on('data', chunk =>{
      body += chunk.toString();
    });

    req.on('end', ()=>{
      const reqData = JSON.parse(body);
      console.log(reqData);
      const users = readUsersFile(); 
      if(reqData.name && reqData.email && reqData.username && reqData.password){
        console.log("true");
        const newUser = {
          id : users.length > 0 ? users[users.length - 1].id + 1 : 1,
          name : reqData.name,
          email: reqData.email,
          username: reqData.username,
          password: reqData.password
        }
        users.push(newUser);
        writeUsersFile(users);
        res.writeHead(201, {'content-type': 'application/json'});
        res.end(JSON.stringify({success: 'true', message : 'User created successfully.', id : newUser.id}));
      }
      else{
        res.writeHead(400, {'content-type': 'application/json'});
        res.end(JSON.stringify({success: 'false', message: 'please provide all fields.'}))
      }
    });
    // get users by id and all users
  } else if(req.url.startsWith('/api/users') && req.method ==='GET'){
    const queryObject = url.parse(req.url, true).query;
    const users = readUsersFile();

    if(queryObject.id){
      const user = users.find(user => user.id == queryObject.id);
      if(user){
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(user));
      }
      else{
        res.writeHead(404, {'content-type': 'application/json'});
        res.end(JSON.stringify({success : 'false', message: 'User not found with given id.'}));
      }
    }
    else{
      res.writeHead(200, {'content-type': 'application/json'});

      console.log(res.writeHead);
      res.end(JSON.stringify(users));
    }
    // delete
  }else if(req.url.startsWith('/api/users') && req.method === "DELETE") {
    const queryObject = url.parse(req.url,true).query;
    const users = readUsersFile();
    if(queryObject.id){
      if(users.find(users => users.id == queryObject.id)){
        const updatedUsersObj = users.filter(user => user.id !=queryObject.id);
        writeUsersFile(updatedUsersObj);
        res.writeHead(201, {'content-type': 'application/json'});
        res.end(JSON.stringify({success: "true", message: "User deleted successfully.", id: queryObject.id}));
      } else {
        res.writeHead(400, {'content-type': 'application/json'});
        res.end(JSON.stringify({success: "false", message: "User doesn't exits.", id: queryObject.id}));
      }
    }
    // update
  } else if (req.url === '/api/users' && req.method==="PATCH"){
    console.log("apiUsersPATCH");
    let body = '';
    req.on('data', chunk =>{
      body += chunk.toString();
    });
    req.on('end', ()=>{
      const reqData = JSON.parse(body);
      const users = readUsersFile();
      const userIndex = users.findIndex(user => user.id == reqData.id);
      if(userIndex !== -1){
        let updatedUser = {...users[userIndex], ...reqData};
        users[userIndex] = updatedUser;
        writeUsersFile(users);
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify({
          success: 'true', 
          message: 'User update successfully.',
          ...users.find(user=> user.id == reqData.id)
        }));
      }
    });
  }else {
    res.writeHead(400, {'content-type': 'application/json'});
    res.end(JSON.stringify({message: 'Resource not found.'}))
  }
});
server.listen(PORT,()=>{
  console.log(`Server listening at port ${PORT}.`);
});
