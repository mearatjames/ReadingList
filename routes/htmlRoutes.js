const readingList = require('../data/readingList')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index')
    })
    app.get('/list', (req, res) => {
        res.render('list', {list: readingList.findAll()})
    })
    app.get('/edit', (req, res) => {
        res.render('edit', readingList.findOne())
      })

}