const express = require('express');
const app = express();

// Middleware function to log request protocol
app.use('/things', (req, res, next) => {
  console.log("A request for things received at " + Date.now());
  next();
});

// Route handler that sends that response
app.get('/things', (req,res) =>{
  res.send('Things');
});
app.listen(3000);
