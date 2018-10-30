let books = []
let selectedBook = {}
module.exports = {
    findAll () {
      return books
    },
    findOne (id) {
      const index = books.findIndex(bookId => bookId.id === id)
      console.log(index)
      selectedBook = books[index]
    },
    // findOne () {
    //   return selectedBook
    // },
    create (book) {
      books.push(book)
    },
    update (id, book) {
      const index = books.findIndex(bookId => bookId === id)
      books[index] = book
    },
    delete (id) {
      const index = books.findIndex(bookId => bookId === id)
      books.splice(index, 1)
    }
  }