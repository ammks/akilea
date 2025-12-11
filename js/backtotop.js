document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const footer = document.querySelector("footer"); // ← フッター要素を取得

  window.addEventListener("scroll", () => {
    // 1000px 以上スクロールでボタン表示
    if (window.scrollY > 1000) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

    // フッターとの重なり判定
    const footerRect = footer.getBoundingClientRect();
    const overlap = window.innerHeight - footerRect.top;

    if (overlap > 0) {
      // フッターが画面内に入ったらボタンを上に避ける
      backToTop.style.bottom = `${overlap + 20}px`;
    } else {
      // 通常位置
      backToTop.style.bottom = "20px";
    }
  });
});
