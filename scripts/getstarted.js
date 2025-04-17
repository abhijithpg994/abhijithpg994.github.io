document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.get-started-btn').addEventListener('click', () => {
        console.log("button ")
        window.location.href = '/signin.html';
    });
});