// UI vars
let toggleMenu = document.querySelector('.menu__bar');
const mobileMenu = document.querySelector(".mobile-menu");
console.log(toggleMenu);

// Mobile Menu Starts Here
toggleMenu.addEventListener('click', (e) => {
    // code here 
    mobileMenu.classList.toggle('active')
    e.preventDefault(); // prevent default behaviour
});
// Mobile Menu Ends Here
