const React = require('react')

const Nav = (homeActive, listActive) => {
  return () =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">ReadingList App</a>
  <button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className={homeActive}>
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className={listActive}>
        <a className="nav-link" href="/list">Reading List</a>
      </li>
    </ul>
  </div>
</nav>
}

module.exports = Nav