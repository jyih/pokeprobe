window.addEventListener("DOMContentLoaded", event => {
    let { logoutTrainer } = require("../../auth");
    console.log(logoutTrainer)
    const logout = document.getElementById("logout-button")
    logout.addEventListener("click", event => {
        logoutTrainer(req, res)
        console.log("hi")
    })
})
