import '../scss/style.scss'
import '../scripts/swiper.js';
import '../scripts/burger.js';
import '../scripts/modal.js';


const readmoreButton = document.querySelector('.first-block__readmore-button');
const readmoreButtonText = document.querySelector('.first-block__readmore-text');
const readmoreText = document.querySelector('.first-block__info-text');
const readmoreImg = document.querySelector('.readmore-img');


readmoreButton.addEventListener('click',() => 
{
    readmoreText.classList.add('first-block__info-text--active');
    readmoreImg.classList.add('rotate');
    if (readmoreButtonText.textContent === 'Читать далее') {
        readmoreButtonText.textContent = 'Скрыть';
  
    } else {
        readmoreButtonText.textContent = 'Читать далее';
        readmoreText.classList.remove('first-block__info-text--active');
        readmoreImg.classList.remove('rotate');
    };
  });
console.log('Works!')
 