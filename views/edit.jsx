const React = require('react')
const Nav = require('./components/nav')

const Edit = props =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <title>ReadingList</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' />
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    </head>
    <body>
        <Nav />
        <div className='container'>
            <div className='jumbotron'>
                <h1 className='text-center'><span className='fa fa-book' /> Reading List Update</h1>
                <hr />
                <h2 className='text-center'>Please update the information below</h2>
            </div>
            <form>
            <div className="row">
                <div className="col">
                <label htmlFor="bookTitle">Title</label>
                <input id='title' type="text" className="form-control" value={props.title} required/>
                </div>
                <div className="col">
                <label htmlFor="bookAuthor">Author</label>
                <input id='author' type="text" className="form-control" value={props.author} required />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                <label htmlFor="pages">Total Page Count</label>
                <input id='pages' min='1' type="number" className="form-control" value={props.pages} required/>
                </div>
                <div className="col">
                <label htmlFor="currentPage">Current Page Number</label>
                <input id='currentPage' min='0' type="text" className="form-control" value={props.currentPage} required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                <input type="checkbox" id="isRead" checked={props.isRead}/>
                <label htmlFor="readCheck">
                    I've read this book
                </label>
                </div>
            </div>
            <button id='submitChange' data-id={props.id} type="submit" className="btn btn-primary">Submit Changes</button>
            </form>   
        </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous" />
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous" /> 
    <script src='./edit.js' />
    </body>
  </html>

module.exports = Edit