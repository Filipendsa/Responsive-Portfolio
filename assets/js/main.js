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

/*==================== SCROLL SECTIONS ACTIVE LINK ===========*/

/*==================== CHANGE BACKGROUND HEADER ==============*/

/*==================== SHOW SCROLL UP ========================*/

/*==================== DARK LIGHT THEME ======================*/