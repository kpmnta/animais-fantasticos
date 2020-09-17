import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
    const eventosClick = ['touchstart', 'click'];
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    function openMenu() {
        menuList.classList.add('active');
        menuButton.classList.add('active');
        outsideClick(menuList, eventosClick, () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        });
    }

    if (menuButton) {
        eventosClick.forEach(() => {
            menuButton.addEventListener('click', openMenu);
        });
    }
}
