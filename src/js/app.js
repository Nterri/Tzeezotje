import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as mail from "./modules/mail.js";
import * as move from "./modules/move.js";
import * as links from "./modules/links.js";
import * as popup from "./modules/popup.js";
import Swiper, {
   Navigation,
   Pagination
} from 'swiper';

flsFunctions.isWebp();

const checkArrow = (swiper, left, right) => {
   if ((swiper.activeIndex + 1) < swiper.slides.length)
      right.classList.add('active');
   else
      right.classList.remove('active');
   if ((swiper.activeIndex + 1) > 1)
      left.classList.add('active');
   else
      left.classList.remove('active');
}

const arrowLeft = document.querySelectorAll('.swiper__left');
const arrowRight = document.querySelectorAll('.swiper__right');
document.querySelectorAll('.swiper').forEach((swiperItem, index) => {
   const swiper = new Swiper(swiperItem, {
      speed: 400,
      spaceBetween: 30,
      on: {
         slideChange: () => {
            if (arrowLeft[index] && arrowRight[index])
               checkArrow(swiper, arrowLeft[index], arrowRight[index]);
         },
      },
   });
   if (arrowLeft[index] && arrowRight[index]) {
      checkArrow(swiper, arrowLeft[index], arrowRight[index]);
      arrowLeft[index].addEventListener('click', () => {
         swiper.slidePrev();
      })
      arrowRight[index].addEventListener('click', () => {
         swiper.slideNext();
      })
   }
})

function scrollHeader() {
   let wt = $(window).scrollTop();
   if (wt > 25) {
      $('.header__container').addClass('black');
   } else {
      $('.header__container').removeClass('black');
   }
}
scrollHeader()
$(window).scroll(() => {
   scrollHeader()
});

const buttonHeader = (button, el) => {
   const header = document.querySelector('.header__container')
   let wt = el.getBoundingClientRect();
   if ((window.innerWidth <= 992 ? (window.scrollY + header.offsetHeight + 1) : window.scrollY) >= (wt.top + pageYOffset)) {
      document.querySelectorAll('.menu__link').forEach(btn => {
         btn.classList.remove('active')
      })
      button.classList.add('active')
   }
}

document.querySelectorAll('.menu__link').forEach(button => {
   const el = document.querySelector(`.${button.href.split('#')[1]}`)
   if (el) {
      buttonHeader(button, el)
      $(window).scroll(() => {
         buttonHeader(button, el)
      });
   }
})