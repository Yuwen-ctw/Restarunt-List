// Require package
const express = require('express')

const app = express()

// Server setting
const port = 3000

// Routes setting
app.get('/', (req, res) => {
  res.send('Init project server')
})


// Run Express server
app.listen(port, () => { console.log(`Express is running on localhost:${port}`)})