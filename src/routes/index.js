const express = require('express');
const fetch = require('../controllers/helpers');

const { Router } = express;

const router = Router();

const {
  getAllEmojis,
  getSearchedEmojis,
  getGroupes,
  getCatogry,
} = require('../controllers');

router.get('/Emojis',getAllEmojis);

router.get('/Emojis/:value', getSearchedEmojis);

router.get('/groups/:group', getGroupes);

router.get('/category/:category', getCatogry);
module.exports = router;
