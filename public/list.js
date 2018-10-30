let edit = document.getElementsByClassName('edit')
for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener('click', event => {
        console.log(event.target.parentElement.getAttribute('data-id'))
        fetch(`/api/readinglist/${event.target.parentElement.getAttribute('data-id')}`)
        .then(r => {
            console.log(r)
            window.location = './edit'
        })
        .catch(e => console.error(e))
    }) 
}

let dlt = document.getElementsByClassName('delete')
for (let i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener('click', event => {
        console.log(event.target.parentElement.getAttribute('data-id'))
        fetch(`/api/readinglist/${event.target.parentElement.getAttribute('data-id')}`, {method: 'DELETE'})
        .then(r => {
            console.log(r)
            window.location = './list'
        })
        .catch(e => console.error(e))
    }) 
}

  