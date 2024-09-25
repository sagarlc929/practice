const http = require('http');

const server = http.createServer((req,res)=> {
  if(req.url === '/'){
   //res.writeHead(200, {'content-type': 'text/html'});
   //chaning content type to plain
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('<h1>Home Page</h1>');
    res.end();
  } else if(req.url === '/about'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>About Page</h1>');
    res.end();
  } else if(req.url === '/contact'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Contact Page');
    res.end();
  } else {
    res.writeHead(404, {'content-type': 'text/html'});
    res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
    res.end();
  }
})

server.listen(5000, ()=>{
  console.log('Server is listening at port 5000');
})
