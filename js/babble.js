let canvas = document.querySelector('.blob-canvas');
if (!canvas) return; // canvas が無ければ何もしない（他ページ用）

let ctx = canvas.getContext('2d');
let blob;

// ▼ 下層ページの色を取得
const header = document.querySelector('.page-header');
const blobColor = header?.dataset.blobColor || '#00E5FF';

// ▼ サイズ調整
function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();


/* ==== Blob クラス（あなたの元コードを必要部分だけ抜粋） ==== */
class Blob {
  constructor() {
    this.points = [];
    this.color = blobColor;
  }
  
  get numPoints() { return 32; }
  get radius() { return 180; }
  get divisional() { return Math.PI * 2 / this.numPoints; }
  get center() {
    return { x: canvas.width * 0.4, y: canvas.height * 0.55 };
  }
  
  init() {
    this.points = [];
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * (i + 1), this);
      this.points.push(point);
    }
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let points = this.points;
    let p1 = points[0].position;
    let p0 = points[this.numPoints - 1].position;

    ctx.beginPath();
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < this.numPoints; i++) {
      points[i].solveWith(points[i-1], points[i+1] || points[0]);
      let p2 = points[i].position;
      ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
      p1 = p2;
    }

    ctx.fillStyle = this.color;
    ctx.fill();

    requestAnimationFrame(this.render.bind(this));
  }
}

/* ==== Point クラス ==== */
class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = { 
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    };
    this.acceleration = -0.3 + Math.random() * 0.6;
  }

  get position() {
    return {
      x: this.parent.center.x + this._components.x * (this.parent.radius),
      y: this.parent.center.y + this._components.y * (this.parent.radius),
    };
  }

  solveWith() {}
}

/* ==== 実行 ==== */
blob = new Blob();
blob.init();
blob.render();
