const { Router } = require('express');

const router = Router();

router.get('/timestamp', (req, res) => {
  res.send(new Date().toString());
});

module.exports = router;
