import { MongoClient } from "mongodb";

let db; // variabile per tenere il riferimento al DB

export async function connectToMongo() {
  const client = new MongoClient(process.env.MONGO_URI);

  await client.connect();
  console.log("✅ Connesso a MongoDB");

  db = client.db("ecommerce"); // nome del DB che hai creato su Atlas
}

export function getDb() {
  if (!db) {
    throw new Error("❌ DB non inizializzato, chiama prima connectToMongo()");
  }
  return db;
}
