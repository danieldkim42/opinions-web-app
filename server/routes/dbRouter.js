const express = require('express');
const router = express.Router();

const dbController = require('../controllers/dbController.js');
const keywordController = require('../controllers/keywordController.js');

router.post('/add', keywordController.generateKeywords, dbController.addEntry, (req, res) => {
  return res.status(201).json('POST request successful');
});

router.post('/get', keywordController.generateKeywords, dbController.addEntry, (req, res) => {
  return res.status(201).json('POST request successful');
});

module.exports = router;