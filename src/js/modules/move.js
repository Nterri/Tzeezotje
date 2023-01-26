const click = document.querySelector('.header__phone');
const header = document.querySelector('.header__menu');
const arrowContainer = document.querySelector('.arrow__container')
const quotesContainer = document.querySelector('.quotes__swiper')
const arrowLeft = document.querySelector('.swiper__left')
const arrowRight = document.querySelector('.swiper__right')
const resize = () => {
   if (window.innerWidth <= 992) {
      header.insertAdjacentElement('beforeend', click);
      arrowContainer.insertAdjacentElement('beforeend', arrowLeft);
      arrowContainer.insertAdjacentElement('beforeend', arrowRight);
   } else {
      header.insertAdjacentElement('afterend', click);
      quotesContainer.insertAdjacentElement('beforebegin', arrowLeft);
      quotesContainer.insertAdjacentElement('afterend', arrowRight);
   }
}
window.addEventListener('resize', resize)
resize()