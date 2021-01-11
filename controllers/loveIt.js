const express = require('express');
const router = express.Router();

router.get('/foods', (req, res) => {
    res.render(
        'love-it/foods', 
        { foods: ['Reuben Sambos', 'watermelon', 'pizza', 'sushi'] }
    )
});

router.get('/animals', (req, res) => {
    res.render(
        'love-it/animals', 
        { animals: ['wolf', 'alpacas', 'giraffe', 'quokkas', 'Capybara'] }
    )
});

module.exports = router;