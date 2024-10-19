var express = require('express');
var app = express();

var things = require('./things.js');

app.get('/hello', function(req, res) {
  res.send("Hello world!");
});

app.post('/hello', (req, res) => {
  res.send("You just called the post method at '/hello'\n");
});

app.all('/test', (req, res) => {
  res.send("HTTP method doesn't have any effect on this route!");
});

app.use('/things', things);

app.listen(3000);
