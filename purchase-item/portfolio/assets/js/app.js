/* ---------------------------------------------------
 #Mobile Menu Toggle
------------------------------------------------------ */
document.getElementById("menu-control").addEventListener("click", (event) => {
	if ( event.target.classList.contains('menu-control') ) {
		document.querySelector("body").classList.toggle("show-nav");
	}
});


/* ---------------------------------------------------
 #Banner Slider
------------------------------------------------------ */
const bannerSlider = new Swiper('.banner-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
});


/* ---------------------------------------------------
 #Testimonial Swiper
------------------------------------------------------ */
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1500: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    2000: {
      slidesPerView: 8,
      spaceBetween: 30
    },
    2400: {
      slidesPerView: 9,
      spaceBetween: 30
    },
  }
});


/* ---------------------------------------------------
 #scroll top
------------------------------------------------------ */
document.getElementById("scroll-top").addEventListener("click", (event) => {
  window.scrollTo({ top: 0, behavior: 'smooth'});
});


const toggleScrollTop = () => {
  if ( window.scrollY > 800 ) {
    document.body.classList.add("show-scroll-top");
  } else {
    document.body.classList.remove("show-scroll-top");
  }
}
window.addEventListener("scroll", toggleScrollTop);

/* ---------------------------------------------------
 #Page Loading
------------------------------------------------------ */
window.onload = function() {
  setTimeout(() => {
    document.body.classList.add('hide-page-loading');
  }, 1500);
}
