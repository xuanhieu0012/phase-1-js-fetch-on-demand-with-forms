const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', e => {
        e.preventDefault()
        const input =e.target.children[1].value
        fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')
            title.innerHTML = data.title;
            summary.innerHTML = data.summary

        })
    })
  
}

document.addEventListener('DOMContentLoaded', init);