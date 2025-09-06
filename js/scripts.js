document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // ウィンドウリサイズ時にメニューが開いていたら高さを再計算して調整
  window.addEventListener("resize", () => {
    if (navMenu.classList.contains("open")) {
      // メニューが開いている場合の処理
    }
  });

  // アニメーション制御
  const animateElements = document.querySelectorAll('.fade-in-up');
  
  // ページ読み込み後に順次アニメーションを実行
  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate');
    }, index * 150); // 150msずつ遅延して上から順番に表示
  });
  
  // 画像スライダーの初期化
  initializeSlider();
  
  // 自動スライド機能（5秒ごと）
  setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
      changeSlide(1);
    }
  }, 5000);
});

// 画像スライダー機能
let currentSlideIndex = 0;

function initializeSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (slides.length === 0) return; // スライダーが存在しない場合は何もしない
  
  // 最初のスライドを表示
  showSlide(0);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (slides.length === 0) return;
  
  // 全てのスライドを非表示にする
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // 指定されたスライドを表示する
  if (slides[index]) {
    slides[index].classList.add('active');
    if (dots[index]) {
      dots[index].classList.add('active');
    }
  }
}

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  currentSlideIndex += direction;
  
  // スライドが最後まで行ったら最初に戻る
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  // スライドが最初より前に行ったら最後に移動
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1; // インデックスは0から始まるため-1
  showSlide(currentSlideIndex);
}