const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))
app.use('/js', express.static(__dirname + '/public/js'))
console.log(__dirname)
// Templating Engine
app.set('view engine', 'ejs')
app.set('views','./src/views')

app.use(bodyParser.urlencoded({extended: true}))

// Routes setup
const newsRouter = require('./src/routes/news')
// const newsRouter = express.Router()

app.use('/', newsRouter)
app.use('/article', newsRouter)


const port = process.env.PORT || 3001
// listen on port 
app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`)
})
