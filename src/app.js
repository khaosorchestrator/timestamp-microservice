const express = require('express');
const app = express();
const { setUpRoutes } = require('./config/routes');

app.use(express.json());
app.use(express.static('public'));
setUpRoutes(app);
module.exports = app;
