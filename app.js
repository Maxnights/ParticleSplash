const canvas = document.querySelector('.hero__canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.speedX = (Math.random()-0.5)*2;
    this.speedY = (Math.random()-0.5)*2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x<0||this.x>canvas.width) this.speedX*=-1;
    if(this.y<0||this.y>canvas.height) this.speedY*=-1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
    ctx.fill();
  }
}

let particles = Array.from({length:50}, () => new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();