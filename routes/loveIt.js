const express = require('express');
const router = express.Router();
const fn = require('../controllers/loveitfn');

router.get('/foods', fn.loveFoods);

router.get('/animals', fn.loveAnimals);

module.exports = router;