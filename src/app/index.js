const { PORT } = require('./config/environment');
const express = require('express');
const controllers = require('./controllers');
const app = express();

app.get('', (req, res) => {
  res.send('<h1>Welcome</h1>');
});

app.use(controllers.authController);
app.use(controllers.employeeController);
app.use(controllers.companyController);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
