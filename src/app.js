const express = require('express');
const { join } = require('path');
const routes = require('./routes');

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.use(routes);
module.exports = app;
