const express = require('express');

const app = express();

app.get('/login', function (req, res) {
  res.sendFile(__dirname + "/public/login/login.html");
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(3000)