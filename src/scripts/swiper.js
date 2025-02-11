

   
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
