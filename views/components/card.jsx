const React = require('react')

const Card = props => 
<div className ="card" style={{width: 30 + 'rem'}}>
<div className ="card-body" data-id={props.bookid}>
  <h5 className ="card-title">Title: {props.title}</h5>
  <h6 className ="card-subtitle mb-2 text-muted">Author: {props.author}</h6>
  <p className ="card-text">Total Pages: {props.pages}</p>
  <p className ="card-text">Current Page: {props.currentPage}</p>
  <p className ="card-text">{props.isRead ? "I've read this book" : "I haven't read this book"}</p>
  <a href="#" className ="edit card-link">Edit</a>
  <a href="#" className ="delete card-link">Delete</a>
</div>
</div>

module.exports = Card