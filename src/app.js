const express = require('express');
const { join } = require('path');
const routes = require('./routes');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', 'public', '500', '500.html'));
  next();
});
app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', 'public', '404', '404.html'));
});

module.exports = app;
