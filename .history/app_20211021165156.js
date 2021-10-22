const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')
const port = 3000

//express template engine 模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
