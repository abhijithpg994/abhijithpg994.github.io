const users = { 'abhijith': 'das', 'anas': 'anas' }

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('signin-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;
        const error_user = document.querySelector('.error-username');
        const error_pass = document.querySelector('.error-password');

        error_user.textContent = '';
        error_pass.textContent = '';
        if (users[email] && users[email] === pass) {
            alert('authorized!!!')
            window.location.href = '/home.html'
        } else if (!users[email]) {
            console.log(error_user)
            error_user.textContent = "This username doesn't exist";
        } else if (!(users[email] === pass)) {
            console.log('not pass')
            error_pass.textContent = "Password is incorrect.";
        }

    })
});