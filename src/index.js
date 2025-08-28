import express from "express";
import catalogRoutes from "./route/catalog.js";
import orderRoutes from "./route/orders.js";   // 👈 aggiunto
import { connectToMongo } from "./services/mongo.js";

const app = express();
app.use(express.json());

// Rotte
app.use("/catalog", catalogRoutes);
app.use("/orders", orderRoutes);   // 👈 aggiunto

// Avvio server solo se connesso al DB
connectToMongo().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
