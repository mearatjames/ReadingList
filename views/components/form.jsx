const React = require('react')

const Form = () => 
<form>
  <div className="row">
    <div className="col">
    <label htmlFor="bookTitle">Title</label>
      <input id='title' type="text" className="form-control" placeholder="The Little Prince" required />
    </div>
    <div className="col">
    <label htmlFor="bookAuthor">Author</label>
      <input id='author' type="text" className="form-control" placeholder="Author" required/>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
    <label htmlFor="pages">Total Page Count</label>
      <input id='pages' min='1' type="number" className="form-control" placeholder="120" required/>
    </div>
    <div className="col">
    <label htmlFor="currentPage">Current Page Number</label>
      <input id='currentPage' min='0' type="number" className="form-control" placeholder="15" required/>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
      <input id='isRead' type="checkbox" />
      <label htmlFor="readCheck">
         I've read this book
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary" id='add'>Add to Reading List</button>
</form>

module.exports = Form