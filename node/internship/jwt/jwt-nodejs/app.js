const express = require('express');
const bodyParser = require('body-parser');
const { generateToken } = require('./jwtUtils');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Middleware for JWT Token Validation
const jwt = require('jsonwebtoken');
const validateToken = (req,res, next) => {
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split('')[1]; //Bearer <token>
    jwt.verify(token, 'yourSecretKey',(err,payload)=>{
      if(err){
        return res.status(403).json({
          success: false,
          message: 'Invalid token',
        });
      } else {
        req.user = payload;
        next(); 
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Token is not provided'
    });
  }
}

// Hardcoded User Data(In a real-world scenario, this would be retrieved from a database)
const user = {
  id: 1,
  username: 'johnDoe',
  password: 'password',
};

// Login Route
app.post('/login', (req,res)=>{
  const {username, password} = req.body;
  // Check if username and password match
  if(username === user.username && password === user.password){
    // Generate JWT token
    const token = generateToken(user);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password',
    });
  }
});

// Protected Route
app.get('/protected', validateToken, (req,res)=>{
  res.json({
    success: true,
    message: 'Welcome to the protected route!',
    user: req.user,
  })
});

// Start the server
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
});
