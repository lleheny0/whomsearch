var express = require('express');
var TwitInstance = require('./twit.js');
var router = express.Router();

router.get('/tweets', (req, res) => {
  res.json({ tweets: [] });
});

router.get('/likes', async (req, res) => {
  await TwitInstance.get(
    'favorites/list',
    { user_id: 'whomstwixt', count: 200, tweet_mode: 'extended' },
    (err, data) => {
      res.json(data);
    },
  );
});

module.exports = router;
