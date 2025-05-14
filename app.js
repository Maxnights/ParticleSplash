const canvas = document.querySelector('.hero__canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 5, 0, Math.PI*2);
  ctx.fill();
  requestAnimationFrame(loop);
}
loop();