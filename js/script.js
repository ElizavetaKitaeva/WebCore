let init = false;
let checkClick = false;
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

  } else if (init && window.innerWidth >= 768) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);

function buttonMore(moreButton) {
  let textButtonMore = moreButton.querySelector('p');
  let imageButtonMore = moreButton.querySelector('.brands__button__image');
  let swiperHeight = document.querySelector('div .swiper');
  let cardView = document.querySelectorAll('.swiper-slide');

  moreButton.addEventListener('click', function() {

    switch (checkClick) {

      case false:
        checkClick = true;
        swiperHeight.style.height = 'auto';
        textButtonMore.textContent = 'Скрыть';
        imageButtonMore.style.transform='rotate(180deg)';
        cardView.forEach(element => {
          element.style.display = 'block';
        });
        break;

      case true:
        checkClick = false;
        swiperHeight.style.height = null;
        textButtonMore.textContent = 'Показать все';
        imageButtonMore.style.transform=null;
        cardView.forEach(element => {
          element.style.display = null;
        });
        break;

      default:
        checkClick = true;

        break;
    }

  });
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    let textButtonMore = document.querySelector('.brands__button__text');
    let imageButtonMore = document.querySelector('.brands__button__image');
    textButtonMore.textContent = 'Показать все';
    imageButtonMore.style.transform=null;
  }
  checkClick = false;
});

buttonMore(document.querySelector('.brands__button'));

