const express = require('express');
const key = require('./api');
const app = express();
const request = require('request');


const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname +'./../../'));
app.listen(PORT);

app.get('/popular', (req, res) => {
  request('https://api.themoviedb.org/3/movie/popular?api_key='+key.key+'&language=en-US&page=1', (err, response, body)=>{
    if(err){
      throw err;
    }
    else {
      const data = JSON.parse(body);
      res.send(data);
      
    }
  })
});

