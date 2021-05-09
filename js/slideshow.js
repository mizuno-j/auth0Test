
// swiper初期化(必須)
// index.html div class="swiper-container"
// 複数作るときはクラス名を変更する
const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  autoHeight: true,
  centeredSlides: true,

  // ループ許可
  loop: true,

  // 画像切替にかける時間
  speed: 1500,

  // 自動再生
  autoplay: {
    // 遷移時間
    delay: 2500,
    disableOnInteraction: false,
  },

  // クリックされたら自動再生停止
  autoplayDisableOnInteraction: false,

  // If we need pagination
  // index.htmlと紐付けために必要
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // ボタン紐付け
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})


var body = document.getElementById('body');
var openMenu = document.getElementById('menuControlOpen'); // or whatever triggers the toggle
var closeMenu = document.getElementById('menuControlClose'); // or whatever triggers the toggle

openMenu.addEventListener('click', function(e) {
   body.classList.toggle('menu--active'); // or whatever your active class is
});

 closeMenu.addEventListener('click', function(e) {
    body.classList.toggle('menu--active'); // or whatever your active class is
});
