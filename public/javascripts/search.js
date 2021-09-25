window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('search-button').addEventListener('click', e => {
        const searchField = document.getElementById('search-bar');

        window.location.href = `/search/${searchField.value}`
    })
})
