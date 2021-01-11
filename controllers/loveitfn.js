const loveFoods = (req, res) => {
    res.render(
        'love-it/foods', 
        { foods: ['Reuben Sambos', 'watermelon', 'pizza', 'sushi'] }
    )
}

const loveAnimals = (req, res) => {
    res.render(
        'love-it/animals', 
        { animals: ['wolf', 'alpacas', 'giraffe', 'quokkas', 'Capybara'] }
    )
}

module.exports = {
    loveAnimals,
    loveFoods
}