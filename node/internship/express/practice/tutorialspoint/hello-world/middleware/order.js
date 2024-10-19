const express = require('express');
const app = express();

// First  middleware before response is sent 
app.use((req,res,next)=>{
  console.log("Start");
  next();
});

// Router handler
app.get('/', (req,res,next)=>{
  res.send("Middle");
  next();
});

app.use('/', (req,res)=>{
  console.log('End');
})

app.listen(3000);
