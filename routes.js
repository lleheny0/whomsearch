var express = require('express');
var router = express.Router();

router.get('/tweets', (req, res) => {
  res.json({ tweets: [] });
});

router.get('/likes', async (req, res) => {
  res.json({ likes: [] });
});

module.exports = router;
