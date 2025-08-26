const express = require('express');
const router = express.Router();

// Catalogo finto (in futuro lo prenderemo da un DB esterno)
const products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Smartphone", price: 800, stock: 25 },
  { id: 3, name: "Cuffie Wireless", price: 150, stock: 50 },
  { id: 4, name: "Monitor 27\"", price: 300, stock: 7 }
];

// GET /catalog → restituisce tutti i prodotti
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
