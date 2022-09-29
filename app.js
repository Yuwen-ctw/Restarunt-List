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
  restaurant = restaurantData.results.find(item => {
    return item.id.toString() === req.params.id.toString()
  })
  res.render('show', { restaurant: restaurant })
})


// Run Express server
app.listen(port, () => { console.log(`Express is running on localhost:${port}`)})