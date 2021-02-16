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

// Testimonial Slider
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.testimonial-left__buttons .btn_prev',
        prevEl: '.testimonial-left__buttons .btn_next',
    },
  });
