const menu = document.querySelector('.menu');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
