import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL);
await client.connect();

const db = client.db('ecommerce'); // nome del database
export const productsCollection = db.collection('products');
