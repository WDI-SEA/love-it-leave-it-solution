const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.render(
        'leave-it/products', 
        { products: ['Axe Body Spray', 'Miller Light', 'Single Ply Toilet Paper', 'Bushmills'] }
    )
});

router.get('/movies', (req, res) => {
    res.render(
        'leave-it/movies', 
        { movies: ['Forest Gump', 'Titanic', 'Love Actually', 'Wonder Woman 1984', 'Groundhog Day'] }
    )
});

module.exports = router;