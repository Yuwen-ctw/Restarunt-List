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
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantData.results})
})


// Run Express server
app.listen(port, () => { console.log(`Express is running on localhost:${port}`)})