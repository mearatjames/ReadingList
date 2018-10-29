const readingList = require('../data/readingList')

module.exports = (app) => {
    app.get('/api/readinglist', (req, res) => {
        res.json(readingList)
    })
}