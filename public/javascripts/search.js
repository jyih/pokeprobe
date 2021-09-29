window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('search-form').addEventListener('submit', e => {
        e.preventDefault()
        const searchField = document.getElementById('search-bar');

        if (!searchField.value) {
            searchField.setAttribute('placeholder', 'Please enter a search term.')

            return
        }

        window.location.href = `/search/${searchField.value}`
    })
})
