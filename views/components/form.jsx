const React = require('react')

const Form = () => 
<form>
  <div className="row">
    <div className="col">
    <label htmlFor="bookTitle">Title</label>
      <input type="text" className="form-control" placeholder="The Little Prince" />
    </div>
    <div className="col">
    <label htmlFor="bookAuthor">Author</label>
      <input type="text" className="form-control" placeholder="Author" />
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
    <label htmlFor="pageCount">Total Page Count</label>
      <input type="text" className="form-control" placeholder="120" />
    </div>
    <div className="col">
    <label htmlFor="currentPage">Current Page Number</label>
      <input type="text" className="form-control" placeholder="15" />
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
      <input type="checkbox" id="readCheck" />
      <label Htmlfor="readCheck">
         I've read this book
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Add to Reading List</button>
</form>

module.exports = Form