const express = require('express');


const app = express();

app.use(express.json());
const PORT = 8080;

const products = [
  {
    id: 1,
    name: 'diablo',
    price: 30000,
    year: 2002,
  },

  {
    id: 2,
    name: 'diablo2',
    price: 40000,
    year: 2002,
  },

  {
    id: 3,
    name: 'diablo3',
    price: 50000,
    year: 2002,
  },

];

// app.get('/', function (req, res) {
//     res.send('hello world');
//   });
  
//   app.get('/products', function (req, res) {
//     res.send(products);
//   });

  app.get('/', function (req, res) {
    res.send('hello world');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });