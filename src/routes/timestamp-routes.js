const { Router } = require('express');
const {
  timestampController,
  unixTimestampController,
  viewsController,
} = require('../controllers');

const timestampRoutes = (router = Router()) => {
  router.get('/', viewsController);

  router.get('/timestamp', timestampController);

  router.get('/unix-timestamp', unixTimestampController);
  return router;
};

module.exports = { timestampRoutes };
