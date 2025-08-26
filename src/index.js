const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// importa la route catalog
const catalogRoutes = require('./routes/catalog');

app.get('/', (req, res) => {
  res.send('Backend e-commerce è online 🚀');
});

// attiva la route catalog
app.use('/catalog', catalogRoutes);

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
