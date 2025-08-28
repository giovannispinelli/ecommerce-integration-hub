import express from "express";
import { getDb } from "../services/mongo.js";

const router = express.Router();

// Crea un nuovo ordine
router.post("/", async (req, res) => {
  try {
    const db = getDb();
    const orders = db.collection("orders");

    // Estraggo dal body i dati dell'ordine
    const { customerEmail, items } = req.body;

    if (!customerEmail || !items || items.length === 0) {
      return res.status(400).json({ error: "Dati ordine non validi" });
    }

    // Struttura ordine
    const newOrder = {
      customerEmail,
      items,
      status: "created", // stato iniziale
      createdAt: new Date(),
    };

    // Inserisco in MongoDB
    const result = await orders.insertOne(newOrder);

    // Ritorno ordine con ID generato
    res.status(201).json({ orderId: result.insertedId, ...newOrder });
  } catch (err) {
    console.error("Errore creazione ordine:", err);
    res.status(500).json({ error: "Errore server" });
  }
});

export default router;
