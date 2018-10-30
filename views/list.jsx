const React = require('react')
const Nav = require('./components/nav')('nav-item', 'nav-item active')
const Card = require('./components/card')

const List = props => 
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
            <h1 className='text-center'><span className='fa fa-book' /> Reading List</h1>
        </div>
    {props.list.map(readinglist =>
     <Card key={readinglist.id} bookid={readinglist.id} title={readinglist.title} author={readinglist.author} pages={readinglist.pages} currentPage={readinglist.currentPage} isRead={readinglist.isRead}/>   )}
    </div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous" />
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous" /> 
<script src='./list.js' />
</body>
</html>

module.exports = List