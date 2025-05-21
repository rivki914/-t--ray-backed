const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const myApiKey = "sk-your-secret-api-key"; // Ganti dengan API Key asli di .env

app.get('/apikey', (req, res) => {
  res.json({ key: myApiKey });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});