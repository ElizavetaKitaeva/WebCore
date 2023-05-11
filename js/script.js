let init = false;
let checkClick = false;
let moreButton = document.querySelector('.brands__button');
function swiperCard() {
  if (window.innerWidth < 768 && !init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
      checkClick = true;
      buttonMore(moreButton);
      
  } else if (init && window.innerWidth >= 768) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);

function buttonMore(moreButton) {
  let textButtonMore = moreButton.querySelector('.brands__button__text');
  let imageButtonMore = moreButton.querySelector('.brands__button__image');
  let swiperHeight = document.querySelector('.swiper');
  let cardView = document.querySelectorAll('.swiper-slide');

    switch (checkClick) {

      case false:
        checkClick = true;
        swiperHeight.style.height = 'auto';
        textButtonMore.textContent = 'Скрыть';
        imageButtonMore.style.transform='rotate(180deg)';
        cardView.forEach(element => {
          element.style.display = 'block';
          console.log(element);
        });
        break;

      case true:
        checkClick = false;
        swiperHeight.style.height = null;
        textButtonMore.textContent = 'Показать все';
        imageButtonMore.style.transform=null;
        cardView.forEach(element => {
          element.style.display = null;
          console.log(element);
        });
        break;

      default:
        checkClick = true;
        break;
    }
}

moreButton.addEventListener('click', function() {
  buttonMore(moreButton);
});

