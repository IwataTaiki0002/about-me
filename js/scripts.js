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
});