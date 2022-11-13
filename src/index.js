const { PORT } = require('./config/environment');
const express = require('express');
const productsRouter = require('./routes/products');
const employeesRouter = require('./routes/employees');
const companiesRouter = require('./routes/companies');
const providersRouter = require('./routes/providers');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.get('', (req, res) => {
  res.send('<h1>Welcome</h1>');
});

app.use(productsRouter);
app.use(employeesRouter);
app.use(companiesRouter);
app.use(providersRouter);

require('./models/connection')
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));


module.exports = app;
