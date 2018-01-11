const express = require('express');
const key = require('./api');
const app = express();
const request = require('request');


const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname +'./../../'));
app.listen(PORT);



