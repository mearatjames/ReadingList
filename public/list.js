let edit = document.getElementsByClassName('edit')
for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener('click', event => {
        console.log(event.target.parentElement.getAttribute('data-id'))
        fetch(`/api/readinglist/${event.target.parentElement.getAttribute('data-id')}`)
        .then(r => {
            console.log(r)
            // window.location = './edit'
        })
        .catch(e => console.error(e))
    }) 
}

    // if (event.target.parentElement === 'edit') {
    //   fetch(`/api/readinglist/${event.target.getAttribute('data-id')}`)
    //     .then(r => {
    //       console.log(r)
    //       // window.location = './book'
    //     })
    //     .catch(e => console.error(e))
    // } else if (event.target && event.target.id === 'deleteBTN') {
    //   fetch(`/books/${event.target.getAttribute('data-id')}`, { method: 'DELETE' })
    //     .then(r => {
    //       console.log(r)
    //       window.location = './list'
    //     })
    // }
  