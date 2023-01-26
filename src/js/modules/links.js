const smoothLinks = document.querySelectorAll('.menu__link[href^="#"]');
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const container = document.querySelector('.header__container')
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (iconMenu && menuBody && container) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
            const id = smoothLink.getAttribute('href');
            window.scrollTo({
                top: (window.innerWidth <= 992 ? document.querySelector(`.${id.split('#').join('')}`).offsetTop - container.offsetHeight : document.querySelector(`.${id.split('#').join('')}`).offsetTop),
                behavior: 'smooth',
            })
        }
    });
};