window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('search-button').addEventListener('click', e => {
        const searchField = document.getElementById('search-bar');

        if (!searchField.value) {
            searchField.value = 'Please enter a search term.'

            return
        }

        window.location.href = `/search/${searchField.value}`
    })
})
