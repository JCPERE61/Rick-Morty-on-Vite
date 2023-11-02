<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const router=require('./routes/index');

const PORT = process.env.PORT || 3001;

server.use(morgan('dev'));

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());

server.use( "/rickandmorty",router)
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
=======
const http = require("http");
const { getCharById } = require("./controllers/getCharById");
const PORT = 3001;

http.createServer((req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');


    if(req.url.includes("/rickandmorty/character")) {
        let idSearch = parseInt(req.url.split('/').pop());
        getCharById(res,idSearch);
    }

    }).listen(PORT,'localhost');

    
   
>>>>>>> e5045fb352c67e0046eab24c2dc371d0fdca9217
