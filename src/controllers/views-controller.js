const { resolve } = require('path');

const viewsController = (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'views', 'index.html'));
};

module.exports = viewsController;
