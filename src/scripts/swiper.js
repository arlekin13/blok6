

   
   const swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',  
      spaceBetween: 16,
      breakpoints: {
        768: {
          enabled: false,
        },
      },   
      pagination: {
        el: '.swiper-pagination',  
        clickable: true,
      },
    });

const showAllButton = document.querySelector('.brands__all');
const hiddenSlides = document.querySelectorAll('.swiper-slide--hidden');
const showAllSpan = document.querySelector('.brands__span');
const showAllImg = document.querySelector('.brands__img');
let allVisible = false;

showAllButton.addEventListener('click',() => 
{
if(allVisible)
{
    hiddenSlides.forEach(slide=> slide.classList.add('swiper-slide--hidden'));
    showAllSpan.textContent = 'Показать все';
    showAllImg.classList.remove('rotate');
    allVisible = false;
}
else
{
    hiddenSlides.forEach(slide => slide.classList.remove('swiper-slide--hidden'));
    showAllSpan.textContent = 'Скрыть';
    showAllImg.classList.add('rotate');
    allVisible = true;
}

});


const showAllButtonT = document.querySelector('.type-technique__all');
const activeItems = document.querySelectorAll('.type-technique__item--active');

let allVisibleT = false;

showAllButtonT.addEventListener('click',() => {
   allVisibleT = !allVisibleT;
    activeItems.forEach(item => {
      item.classList.toggle('visible', allVisibleT);
    

    });

const showAllSpanT = document.querySelector('.type-technique__span');
const showAllImgT = document.querySelector('.type-technique__img');
if (showAllSpanT) {
  showAllSpanT.textContent = allVisibleT ? 'Скрыть' : 'Показать все';
}
if (showAllImgT) {
  showAllImgT.style.transform = allVisibleT ? 'rotate(180deg)' : 'rotate(0deg)';
}

});


// Бургер-меню
const burgerOpen = document.querySelector('.header__burger-button');
const burgerClose = document.querySelector('.burger__button-close');
const asidePanel = document.querySelector('.aside');
const asideBackground = document.querySelector('.aside__background');

const modalChatPanel = document.querySelector('.modal--chat');
const modalTelPanel = document.querySelector('.modal--call');
const modalCloseButtons = document.querySelectorAll('.modal__close-button');


function closeBurgerMenu() {
  asidePanel.classList.remove('aside--visible');
  asideBackground.classList.remove('aside__background--visible');
  document.body.style.overflow = '';
}


function openModal(modal) {
  closeBurgerMenu(); //
  modal.classList.add('modal--open');
  asideBackground.classList.add('aside__background--visible');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalChatPanel.classList.remove('modal--open');
  modalTelPanel.classList.remove('modal--open');
  asideBackground.classList.remove('aside__background--visible');
  document.body.style.overflow = '';
}


burgerOpen.addEventListener('click', () => {
  asideBackground.classList.add('aside__background--visible');
  asidePanel.classList.add('aside--visible');
  document.body.style.overflow = 'hidden';


  const modalChatOpen = asidePanel.querySelector('.button--message');
  const modalTelOpen = asidePanel.querySelector('.button--tel');


  if (modalChatOpen) {
    modalChatOpen.addEventListener('click', () => {
      openModal(modalChatPanel);
    });
  }

  if (modalTelOpen) {
    modalTelOpen.addEventListener('click', () => {
      openModal(modalTelPanel);
    });
  }
});


burgerClose.addEventListener('click', closeBurgerMenu);

asideBackground.addEventListener('click', closeBurgerMenu);

modalCloseButtons.forEach(button => {
  button.addEventListener('click', closeModal);
});

asideBackground.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

//модалки
const modalChatOpen =document.querySelector('.button--message');
const modalTelOpen =document.querySelector('.button--tel');

function openModal(modal){
    closeBurgerMenu();
    modal.classList.add('modal--open');
    asideBackground.classList.add('aside__background--visible');
    document.body.style.overflow = 'hidden';
   
}

function closeModal(){
modalChatPanel.classList.remove('modal--open');
modalTelPanel.classList.remove('modal--open');
asideBackground.classList.remove('aside__background--visible');
document.body.style.overflow = '';
}

if (modalChatOpen) {
    modalChatOpen.addEventListener('click', () => {
      openModal(modalChatPanel);
    });
  }
  
  if (modalTelOpen) {
    modalTelOpen.addEventListener('click', () => {
      openModal(modalTelPanel);
    });
  }

modalCloseButtons.forEach(button =>{
    button.addEventListener('click', closeModal);
});

asideBackground.addEventListener('click', closeModal);


