document.querySelector('#submitChange').addEventListener('click', event => {
    event.preventDefault()
    fetch(`/api/readinglist/${document.querySelector('#submitChange').getAttribute('data-id')}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        id: document.querySelector('#title').value + document.querySelector('#author').value,
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        pages: document.querySelector('#pages').value,
        currentPage: document.querySelector('#currentPage').value,
        isRead: document.querySelector('#isRead').checked
      })
    })
      .then(r => {
        console.log(r)
        window.location = './list'
      })
      .catch(e => console.error(e))
  })
  