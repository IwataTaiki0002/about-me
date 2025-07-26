document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");


  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
  // ウィンドウリサイズ時にメニューが開いていたら高さを再計算して調整
  window.addEventListener("resize", () => {
    if (navMenu.style.maxHeight && navMenu.style.maxHeight !== "0px") {
      navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    }
  });
});