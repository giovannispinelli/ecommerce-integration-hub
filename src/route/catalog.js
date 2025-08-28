import express from "express";
import { getDb } from "../services/mongo.js";

const router = express.Router();

// GET catalogo prodotti
router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const products = db.collection("products"); // nome della tua collection

    const allProducts = await products.find().toArray();

    res.json(allProducts);
  } catch (err) {
    console.error("Errore lettura catalogo:", err);
    res.status(500).json({ error: "Errore server" });
  }
});

export default router;
