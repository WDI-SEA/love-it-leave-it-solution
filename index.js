const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const axios = require('axios');

const API_URL = `https://pokeapi.co/api/v2/pokemon/`

// app setup
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/testpoke', (req, res) => {
    axios.get(API_URL+'ditto')
    .then(response => {
        res.render('poke', { pokemon: response.data });
    })
});

// Controllers/Routes
app.use('/love-it', require('./routes/loveIt'));
app.use('/leave-it', require('./routes/leaveIt'));

app.listen(8000, () => console.log(`🎧 You're listening to the sweet sounds of port 8000 🎧`))