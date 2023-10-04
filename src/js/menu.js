const menu = document.querySelector('.menu');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', () => {
    if (menu.style.left === '-35rem') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-35rem';
    }
});

const closeButton = document.querySelector('.close-button');

function closeMenu() {
  menu.style.transform = 'translateX(-130%)';
}
closeButton.addEventListener('click', closeMenu);
