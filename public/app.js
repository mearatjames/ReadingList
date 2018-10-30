document.getElementById('add').addEventListener('click', event => {
    event.preventDefault()
    fetch('/api/readinglist', {
      method: 'POST',
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
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#pages').value = ''
        document.querySelector('#currentPage').value = ''
        document.querySelector('#isRead').checked = false
      })
      .catch(e => console.error(e))
  })
  