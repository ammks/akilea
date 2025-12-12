const canvas = document.getElementById("blob-canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}
resize();
window.addEventListener("resize", resize);

// ▼ 色をページごとに変える
const header = document.querySelector(".page-header");
const blobColor = header.dataset.blobColor || "#00E5FF";

// Blob のパラメータ
let radius = 150;
let points = 32;
let angleStep = (Math.PI * 2) / points;

// 中心位置（調整可能）
function center() {
  return {
    x: canvas.width * 0.5,
    y: canvas.height * 0.6
  };
}

// アニメーション描画
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let c = center();
  ctx.fillStyle = blobColor;
  ctx.beginPath();

  for (let i = 0; i <= points; i++) {
    let angle = i * angleStep;
    let wobble = Math.sin(Date.now() / 600 + i) * 10;

    let x = c.x + Math.cos(angle) * (radius + wobble);
    let y = c.y + Math.sin(angle) * (radius + wobble);

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.closePath();
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();
