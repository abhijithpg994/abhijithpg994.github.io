const users = { 'abhijith': 'das', 'anas': 'anas' }

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('login-form').addEventListener('submit', (e) => {
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

    });

    const formTitle = document.querySelector('.form-title');
    const signUpFormContainer = document.querySelector('.signup-form-container');
    const logInFormContainer = document.querySelector('.login-form-container');

    document.querySelector('.signup-btn').addEventListener('click', () => {
        signUpFormContainer.classList.remove('hidden');
        logInFormContainer.classList.add('hidden');
        formTitle.textContent = "Sign Up"
    });

    document.querySelector('.login-btn').addEventListener('click', () => {
        logInFormContainer.classList.remove('hidden');
        signUpFormContainer.classList.add('hidden');
        formTitle.textContent = "Log In";
    });
});
