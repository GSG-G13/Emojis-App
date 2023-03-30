const express = require('express');
const { join } = require('path');

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

router.get('/category/:category', getCatogry);

router.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', '500', '500.html'));
  next();
});
router.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404', '404.html'));
});
module.exports = router;
