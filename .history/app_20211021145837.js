const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//express template engine 模板引擎
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

//setting static files
app.use(express.static('public'))

app.get('/',(req,res) => {
  const movieOne = {
    id: 1,
    image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    title: '<h1>Jurassic World: Fallen Kingdom<h1>',
  }
  res.render('index',{movie:movieOne})
})

app.listen (port,() => {
  console.log (`Express is listening on localhost:${port}`)
})
