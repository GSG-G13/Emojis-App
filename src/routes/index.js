const express = require('express');
const fetch = require('../controllers/helpers');

const {Router} = express;

const router = Router();

const {
  getAllEmojis,
  getSearchedEmojis
} = require('../controllers');

router.get('/Emojis',getAllEmojis);
router.get('/Emojis/:value', getSearchedEmojis);
// router.get('/index', getAllEmojis);

module.exports = router;
