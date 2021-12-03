/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-Menu'),
    navToggle = document.getElementById('nav-Toggle'),
    navClose = document.getElementById('nav-Close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu');
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('nav-Menu')
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ======================*/

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ========================*/

/*==================== PORTFOLIO SWIPER  =====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ===========*/

/*==================== CHANGE BACKGROUND HEADER ==============*/

/*==================== SHOW SCROLL UP ========================*/

/*==================== DARK LIGHT THEME ======================*/