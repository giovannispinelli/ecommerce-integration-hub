import express from 'express';
import catalogRoutes from './route/catalog.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Route di test
app.get('/', (req, res) => {
  res.send('Backend e-commerce è online 🚀');
});

// Route catalogo
app.use('/catalog', catalogRoutes);

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
