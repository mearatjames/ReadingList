const express = require('express')
const path = require('path')
const app = express()
const bodyparser = require('body-parser')

let PORT = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

require('./routes/htmlRoutes')(app)
require('./routes/apiRoutes')(app)

app.listen(PORT, function() {
    console.log('App listening on PORT:' + PORT)
})