/*SHOW MENU*/ 

const navMenu = document.getElementById('navmenu'),
      navToggle = document.getElementById('navtoggle'),
      navClose = document.getElementById('navclose');

/*MENU SHOW*/ 

    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })

/*MENU HIDDEN*/ 

    navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })

/*REMOVE MENU MOBILE*/ 

const navLink = document.querySelectorAll('.nav-link')

const linkAction= () => {
    const navMenu = document.getElementById('navmenu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))