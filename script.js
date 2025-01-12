const menu = document.querySelector('#menu-icon'); 
const navBar = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('open');
    }

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true,
});

sr.reveal('.hero-text', {origin: 'top', delay: 200});
sr.reveal('.hero-img', {origin: 'top', delay: 450});
sr.reveal('.media-icons', {origin: 'left', delay: 500});
sr.reveal('.scroll-down', {origin: 'right', delay: 450});