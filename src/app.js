const express = require('express');
const app = express();
const { setUpRoutes } = require('./config/routes');

app.use(express.json());
setUpRoutes(app);
module.exports = app;
