window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('search-button').addEventListener('click', e => {
        const searchField = document.getElementById('search-bar');

        if (!searchField.value) {
            searchField.value = 'Please entire a search term.'

            return
        }

        window.location.href = `/search/${searchField.value}`
    })
})
