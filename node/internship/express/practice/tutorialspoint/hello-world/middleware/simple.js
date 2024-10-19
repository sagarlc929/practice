const express = require('express');
const app = express();

app.use((req, res, next)=>{
  console.log("A new request received at " + Date.now());
  // This function call is very important 
  // It tells that more processing is required for the current request
  // and is in the next middleware
  
  //function rote handle.
  next();
})

app.listen(3000);
