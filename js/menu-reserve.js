document.addEventListener("scroll", () => {
    const btn = document.getElementById("reserveButton");
    const backBtn = document.getElementById("backToTop");
    const footer = document.querySelector("footer");

    const triggerHeight = 400; // 表示開始位置（調整OK）

    // ① ボタンの表示・非表示
    if (window.scrollY > triggerHeight) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }

    // ② フッターに重なりそうになったら停止させる
    const footerRect = footer.getBoundingClientRect();
    const backBtnHeight = backBtn.offsetHeight + 20; // ボタン高さ + 余白

    if (footerRect.top < window.innerHeight - backBtnHeight) {
        // フッターが見え始めた → 上に持ち上げる
        btn.style.bottom = `${footerRect.bottom + 20}px`;
    } else {
        // 通常位置
        btn.style.bottom = "100px";
    }
});
