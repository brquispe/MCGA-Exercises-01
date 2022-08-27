const { PORT } = require('./config/environment');
const express = require('express');
const { authController } = require('./controllers');
const app = express();

app.get('', (req, res) => {
  res.send('<h1>Welcome</h1>');
});

app.use(authController);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));