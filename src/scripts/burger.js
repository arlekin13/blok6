const burgerOpen= document.querySelector('.header__burger-button');
const burgerClose= document.querySelector('.burger__button-close');
const asidePanel= document.querySelector('.aside');
const asideBackground = document.querySelector('.aside__background');

burgerOpen.addEventListener('click', ()=>{
    asideBackground.classList.add('aside__background--visible')
    asidePanel.classList.add('aside--visible');
    document.body.style.overflow = 'hidden';
});

burgerClose.addEventListener('click',()=>{
    asidePanel.classList.remove('aside--visible');
    asideBackground.classList.remove('aside__background--visible');
    document.body.style.overflow = '';
});

asideBackground.addEventListener('click', () => {
    asidePanel.classList.remove('aside--visible');
    asideBackground.classList.remove('aside__background--visible'); // Скрываем фон
    document.body.style.overflow = '';
});