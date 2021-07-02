window.addEventListener("DOMContentLoaded", (event) => {
    console.log("hello from javascript!")
    const searchButton = document.querySelector('.mag-icon');
    const memes = document.querySelector('.memes')
    const searchBar = document.querySelector('.search-bar-spot')
    searchButton.addEventListener('click', event => {
        memes.innerHTML = 'pOkeMAns'
        searchBar.placeholder = 'Feature to be implemented...'
        if (searchBar.value) searchBar.value = 'Feature to be implemented...'
    })
})