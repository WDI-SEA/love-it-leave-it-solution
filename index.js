const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

// app setup
app.set('view engine', 'ejs');
app.use(layouts);

app.get('/', (req, res) => {
    res.render('home');
});

// Controllers/Routes
app.use('/love-it', require('./controllers/loveIt'));
app.use('/leave-it', require('./controllers/leaveIt'));

app.listen(8000, () => console.log(`🎧 You're listening to the sweet sounds of port 8000 🎧`))