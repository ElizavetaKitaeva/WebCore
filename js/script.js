var init = false;

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
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
    }
  } else if (init) {
    swiper.destroy();
    init = false;

  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

let more = document.querySelector('.brands__button');
var more_click = false;
more.addEventListener('click', function() {
  if (!more_click){
    more_click = true;
  document.querySelector('div .swiper').style.height = 'auto';
  more.querySelector('p').textContent = 'Скрыть';
  more.querySelector('.img').style.transform='rotate(180deg)';
  } else {
    more_click = false;
    document.querySelector('div .swiper').style.height = '150px';
    more.querySelector('p').textContent = 'Показать все';
    more.querySelector('.img').style.transform='rotate(0deg)';
  }
});
