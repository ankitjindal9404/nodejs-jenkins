// src/app.js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/sum', (req, res) => {
  const a = Number(req.query.a || 0);
  const b = Number(req.query.b || 0);
  res.json({ sum: a + b });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;
