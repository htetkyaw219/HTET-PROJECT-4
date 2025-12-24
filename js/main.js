// Responsive nav toggle for hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.getElementById('menu');
    if (menuButton && menu) {
        menuButton.addEventListener('click', function () {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !expanded);
            menu.classList.toggle('is-open');
        });
    }
});
