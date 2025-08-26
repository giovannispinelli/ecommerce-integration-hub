import express from 'express';
import { productsCollection } from '../services/mongo.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await productsCollection.find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero prodotti' });
  }
});

export default router;
