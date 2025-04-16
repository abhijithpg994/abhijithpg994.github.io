document.addEventListener('DOMContentLoaded', function () {


    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.body;
    const toggleThemeButton = document.getElementById('toggleTheme');

    if (prefersDarkMode) {
        body.classList.add('dark-mode');
        toggleThemeButton.textContent = '☀️';
    }

    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleThemeButton.textContent = body.classList.contains('dark-mode')? '☀️' : '🌙';

    })

});