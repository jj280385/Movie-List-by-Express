const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
  res.send('<h1>This is my movie list built with Express</h1>')
})

app.listen (port,() => {
  console.log (`Express is listening on localhost:${port}`)
})
