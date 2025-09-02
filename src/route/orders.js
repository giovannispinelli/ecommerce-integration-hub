import express from "express";
import { getDb } from "../services/mongo.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// POST /orders -> crea un nuovo ordine
router.post("/", async (req, res) => {
  try {
    const db = await getDb();
    const order = req.body;

    // aggiungo timestamp e stato iniziale
    order.status = "CREATO";
    order.createdAt = new Date();

    const result = await db.collection("orders").insertOne(order);
    res.status(201).json({ message: "Ordine creato", id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /orders -> lista tutti gli ordini
router.get("/", async (req, res) => {
  try {
    const db = await getDb();
    const orders = await db.collection("orders").find().toArray();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /orders/:id -> singolo ordine
router.get("/:id", async (req, res) => {
  try {
    const db = await getDb();
    const order = await db.collection("orders").findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!order) {
      return res.status(404).json({ error: "Ordine non trovato" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
