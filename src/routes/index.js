const express = require('express');

const {Router} = express;

const router = Router();

const {
  getAllEmojis,
} = require('../controllers');

router.get('/Emojis', getAllEmojis);
// router.get('/index', getAllEmojis);

module.exports = router;
