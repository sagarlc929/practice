var express = require('express');
var app = express();

app.get('/things/:id([0-9]{5})', (req,res)=>{
  res.send('id:' + req.params.id);
});

app.listen(3000);
