const express = require('express');
// const { join } = require('path');

const { Router } = express;

const router = Router();

const {
  getAllEmojis,
  getSearchedEmojis,
  getGroupes,
  getCatogry,
} = require('../controllers');

router.get('/Emojis', getAllEmojis);

router.get('/Emojis/:value', getSearchedEmojis);

router.get('/groups/:group', getGroupes);

// router.get('/404.js', (req, res) => {
//   res.header({ 'Constent-Type': 'text/js' });
//   res.sendFile(join(__dirname, '..', 'publi', '404', '404.js'));
// });

router.get('/category/:category', getCatogry);
module.exports = router;
