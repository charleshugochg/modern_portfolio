// Select DOM element
const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-item');

// Set initital state
let show_menu = false

btnMenu.addEventListener('click', () => {
    if (!show_menu) {
        btnMenu.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        menuItems.forEach(item => {
            item.classList.add('show')
        })

        // set state
        show_menu = true;
    } else {
        btnMenu.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        menuItems.forEach(item => {
            item.classList.remove('show')
        });

        //set state
        show_menu = false;
    }
})