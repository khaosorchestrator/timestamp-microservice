const { Router } = require('express');
const { timestampController, viewsController } = require('../controllers');

const timestampRoutes = (router = Router()) => {
  router.get('/', viewsController);

  router.get('/api/timestamp/:date_string', timestampController);

  return router;
};

module.exports = { timestampRoutes };
