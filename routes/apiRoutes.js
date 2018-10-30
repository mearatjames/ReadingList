//Bring in data file
const readingList = require('../data/readingList')

module.exports = (app) => {
//Get a full list of books
    app.get('/list', (req, res) => {
        res.json(readingList.findAll())
    })
//Add a new book to the list
    app.post('/api/readinglist', (req, res) => {
    readingList.create(req.body)
    res.sendStatus(200)
    })
//Get one book
    app.get('/api/readinglist/:id', (req, res) => {
        readingList.findOne(req.params.id)
        res.sendStatus(200)
    })

//Update a book
    app.put('/api/readinglist/:id', (req, res) => {
        readingList.update(req.params.id, req.body)
        res.sendStatus(200)
    })

//Delete a book
    app.delete('/api/readinglist/:id', (req, res) => {
        readingList.delete(req.params.id)
        res.sendStatus(200)
    })
}