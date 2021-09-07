
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav_list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navList.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navList.classList.remove('open');
    menuOpen = false;
  }
});

