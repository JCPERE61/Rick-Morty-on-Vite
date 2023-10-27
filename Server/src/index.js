require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const routes=require('./routes/index');

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

server.use( "/rickandmorty",routes)
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});