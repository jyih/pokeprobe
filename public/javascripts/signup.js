window.addEventListener("DOMContentLoaded", (event) => {
    const passwordInput = document.querySelector('.password-input')
    const confirmPasswordInput = document.querySelector('.confirm-password-input')
    const passwordMatchCheck = document.getElementById('password-match-check')

    function checkPasswords() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatchCheck.innerHTML = 'Passwords don\'t match.'
        } else {
            passwordMatchCheck.innerHTML =''
        }
    }
    
    confirmPasswordInput.addEventListener('keyup', e => {
        checkPasswords()
    })

    passwordInput.addEventListener('keyup', e => {
        checkPasswords()
    })
})
