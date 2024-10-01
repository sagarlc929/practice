
const http = require('http');
const fs = require('fs');
const path = require('path');

const registrationPage = fs.readFileSync('./pages/registration.html', 'utf8');
const loginPage = fs.readFileSync('./pages/login.html', 'utf8');
const homePage = fs.readFileSync('./pages/homepage.html', 'utf8');

const userInfoPath = path.join(__dirname, 'database', 'usersInfo.json');

function readUsersFile(){
  const userData = fs.readFileSync(userInfoPath, 'utf8');
  return JSON.parse(userData);
}

function writeUsersFile(users){
  const updatedUsersFileContent = JSON.stringify(users,null,2);
  fs.writeFileSync(userInfoPath, updatedUsersFileContent, 'utf8');
}

const server = http.createServer((request, response) => {

  // registration page request
  if (request.url === '/' && request.method === "GET") {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(registrationPage);
    response.end();
  
  // registration page submit
  } else if (request.url === '/' && request.method === "POST") {
    let body = '';
    request.on("data", chunk => {
      body += chunk.toString();
    });

    request.on('end', () => {
      const formData = new URLSearchParams(body);
      const newUser = {
        fullName: formData.get('full-name'),
        email: formData.get('email'),
        username: formData.get('user-name'),
        password: formData.get('password')
      };

      const users = readUsersFile();
      users.push(newUser);
      writeUsersFile(users);

      response.writeHead(200, { 'content-type': 'text/html' });
      response.write('<html><body><h1>Registration successful</h1><a href="/login">Go to login page.</a></body></html>');
      response.end();
    });
  
  // login page request
  } else if (request.url === '/login' && request.method === 'GET') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(loginPage);
    response.end();

  // login page submit
  } else if (request.url === '/login' && request.method === 'POST') {
    let body = '';

    request.on('data', chunk => {
      body += chunk.toString();
    });

    request.on('end', () => {
      const formData = new URLSearchParams(body);
      
      const user = {
        username: formData.get('username'),
        password: formData.get('password'),
      };

      const users = readUsersFile();
      const userMatched = users.filter(u=>user.username === u.username && user.password === u.password);
      if(userMatched.length){
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(homePage);
        response.end();
      }
      else{
        response.writeHead(200, {'content-type': 'text/html'});
        response.write('<h1>User with given credential is not available found</h1><br><p><a href="/login">go to login page</a><br><a href="/">got to registration page</a><p>');
        response.end();
      }
    });
  // page not found
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.write('<h1>404, Resource not found.</h1>');
    response.end();
  }
});

server.listen(5000, () => {
  console.log("Server listening at port 5000.");
});

