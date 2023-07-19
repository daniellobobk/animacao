const canvas = document.getElementById('earthCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 1000;

const earthRadius = 100;
let earthPositionX = canvas.width / 2;
let earthPositionY = canvas.height / 2;
let angle = 0;

function drawEarth() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(earthPositionX, earthPositionY, earthRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

  angle += 0.01;

  earthPositionX = canvas.width / 2 + 150 * Math.cos(angle);
  earthPositionY = canvas.height / 2 + 100 * Math.sin(angle);

  requestAnimationFrame(drawEarth);
}

drawEarth();
