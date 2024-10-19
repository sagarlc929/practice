var express = require('express');
var app = express();

app.get('*',(req,res)=>{
  res.send('Sorry,this is an invalid URL');
});

app.listen(3000);
