const booProducts = (req, res) => {
    res.render(
        'leave-it/products', 
        { products: ['Axe Body Spray', 'Miller Light', 'Single Ply Toilet Paper', 'Bushmills'] }
    )
}

const booMovies = (req, res) => {
    res.render(
        'leave-it/movies', 
        { movies: ['Forest Gump', 'Titanic', 'Love Actually', 'Wonder Woman 1984', 'Groundhog Day'] }
    )
}

module.exports = {
    booMovies,
    booProducts
}