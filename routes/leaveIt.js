const express = require('express');
const router = express.Router();
const fn = require('../controllers/leaveitfn');

router.get('/products', fn.booProducts);

router.get('/movies', fn.booProducts);

module.exports = router;