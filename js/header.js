const header = document.querySelector('.header');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;

  if (current > 400) {  
    // MV から少し離れたらヘッダーを消す
    header.classList.add('hidden');
  } else {
    // 上に戻ったら表示
    header.classList.remove('hidden');
  }

  lastScroll = current;
});
