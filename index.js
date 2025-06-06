const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Default route
app.get('/', (req, res) => {
  res.send('✅ Hello from my weapp566 App Service!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
