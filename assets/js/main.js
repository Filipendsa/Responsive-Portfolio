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
const skillsContent = document.getElementsByClassName('skillsContent');
const skillsHeader = document.querySelectorAll('#skillsHeader');

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skillsContent skillsClose';
  }
  if (itemClass === 'skillsContent skillsClose') {
    this.parentNode.className = 'skillsContent skillsOpen';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]');
const tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
  tab.addEventListener('click', ()=>{
    const target = document.querySelector(tab.dataset.target)

    tabsContents.forEach(tabsContent => {
      tabsContent.classList.remove('qualificationActive')
    })
    target.classList.add('qualificationActive')

    tabs.forEach(tab => {
      tab.classList.remove('qualificationActive')
    })

    tab.classList.add('qualificationActive')
  })
})

/*==================== SERVICES MODAL ========================*/

const modalViews = document.querySelectorAll('.servicesModal')
const modalBtn = document.querySelectorAll('.servicesButton')
const modalCloses = document.querySelectorAll('.servicesModalClose')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('activeModal')
}

modalBtn.forEach((modalBtn,i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalViews.forEach(modalView => {
      modalView.classList.remove('activeModal')
    });
  })
});

/*==================== PORTFOLIO SWIPER  =====================*/

let swiper = new Swiper('.portfolioContainer', {
  cssMode: true,
  loop:true,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination:{
    el: '.swiper-pagination',
    clickable:true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ===========*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ==============*/

function scrollHeader(){
  const nav = document.getElementById('header')
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ========================*/

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ======================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
