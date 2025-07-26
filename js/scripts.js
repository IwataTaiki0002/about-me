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
});