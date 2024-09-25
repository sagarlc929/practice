// Improt the http module
const http = require('http');

// Creating server using the createServer() function
const server = http.createServer((req,res)=>{
  res.end('Hello World');
})

// Listening the server at some port using the listen() method
server.listen(5000, ()=>{
  console.log('Server listening at port 5000');
})
