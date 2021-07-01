  
window.addEventListener("DOMContentLoaded", event => {
    const logout = document.getElementById("logout-button")
    logout.addEventListener("click", event => {
        console.log('hi')
        console.log(event.target.id)
       window.location.assign("/trainers/logout")
    })
})
