const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Welcome to Location based gaming app.')
})
app.get('/about', (req, res) => {
    res.send(' Displays the about page of this app. ')
  })
app.get('/contact', (req, res) => {
    res.send(' Displays the contact page of this app. ')
  })
app.get('/help', (req, res) => {
    res.send(' Displays the help page of this app. ')
  })
app.get('/help/:topic', (req, res) => {
    res.send(` How can I help you with this ${req.params.topic}. `)
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})