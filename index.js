// const express = require('express'),
import express from 'express';

import { sendHtml } from './utils/sendHtml';

http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  sendHtml(res, './index.html');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});