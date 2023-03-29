const express = require('express');

const { Router } = express;

const router = Router();

const {
  getAllEmojis,
  getGroupes,
  getCatogry,
} = require('../controllers');

router.get('/Emojis', getAllEmojis);

router.get('/groups/:group', getGroupes);

router.get('/category/:category', getCatogry);
module.exports = router;
