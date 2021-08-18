const btn = document.querySelector('.ham');

const navlinks = document.querySelector('.nav-links')

let menuOpen = false;
btn.addEventListener('click', () => {
    if(!menuOpen){
        btn.classList.add('open');
        menuOpen = true;
    } else {
        btn.classList.remove('open');
        menuOpen = false;
    }
    navlinks.classList.toggle('open');
});
