window.addEventListener("DOMContentLoaded", (event) => {
  const deleteButton = document.getElementById('delete-button')

  if (deleteButton) {
    deleteButton.addEventListener('click', e => {
      var urlText = window.location.href;
      urlText = urlText.slice(urlText.indexOf('pokepages'))
      var pokeId = urlText.slice(urlText.indexOf('/') + 1)
      if (window.confirm('Are you sure you want to delete?')) {
        window.location.href = `delete/${pokeId}`
      }

    })
  }
})
