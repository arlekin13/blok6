

   
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
