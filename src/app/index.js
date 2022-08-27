const {PORT} = require('./config/environment')
const express = require('express');
const app = express()

app.get('', (req, res) => {
  res.send('<h1>Welcome</h1>')
})

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))