// Require package
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantData = require('./restaurant.json')
const app = express()


// Server setting
const port = 3000
  // set view engine and layout
app.set('view engine', 'handlebars')
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
  // set static files
app.use(express.static('public'))


// Routes setting
  //index page
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantData.results})
})
  //show pages
app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurantData.results.find(item => {
    return item.id.toString() === req.params.id.toString()
  })
  res.render('show', { restaurant: restaurant })
})
  //search index
app.get('/search?', (req, res) => {
  const filterRestaurants = restaurantData.results.filter(item => {
    //combining strings before filter
    const concatString = item.name.concat(" ", item.name_en, " ", item.category).toLowerCase()
    return concatString.includes(req.query.keyword.toLowerCase().trim())
  })
  res.render('index', { restaurant: filterRestaurants, keyword: req.query.keyword })
})


// Run Express server
app.listen(port, () => { console.log(`Express is running on localhost:${port}`)})