const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//express template engine 模板引擎
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.get('/',(req,res) => {
  res.rander('index')
})

app.listen (port,() => {
  console.log (`Express is listening on localhost:${port}`)
})
