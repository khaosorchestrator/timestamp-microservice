const { timestampRoutes } = require('../routes/timestamp-routes');

const setUpRoutes = (app) => {
  app.use(timestampRoutes());
};

module.exports = { setUpRoutes };
