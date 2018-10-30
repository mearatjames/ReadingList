let books = []
let selectedBook = {}
module.exports = {
    findAll () {
      return books
    },
    findOne (id) {
      const index = books.findIndex(bookId => bookId.id === id)
      selectedBook = books[index]
    },
    getOne () {
      return selectedBook
    },
    create (book) {
      books.push(book)
    },
    update (id, book) {
      const index = books.findIndex(bookId => bookId.id === id)
      books[index] = book
    },
    delete (id) {
      const index = books.findIndex(bookId => bookId.id === id)
      books.splice(index, 1)
    }
  }