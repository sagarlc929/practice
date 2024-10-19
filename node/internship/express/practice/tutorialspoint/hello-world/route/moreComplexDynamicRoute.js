var express = require('express');
var app = express();

app.get('/things/:name/:id', (req,res)=>{
  res.send('id: ' + req.params.id + 'name: ' + req.params.name);
});

app.listen(3000);
