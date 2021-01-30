var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var H = 500;
var W = 800;

canvas.width = W;
canvas.height = H;

var particles = [];

setInterval(draw, 30);

function draw() {
  var blob = {
    x: W / 2,
    y: H / 2,
    xSpeed: (Math.random() - 0.5) * 10,
    ySpeed: (Math.random() - 0.5) * 10,
    size: 10
  }
  particles.push(blob);

  clear();
  for(var i = 0; i < particles.length; i++) {
    updateBlob(particles[i]);
    drawBlob(particles[i]);
  }
}

function drawBlob(blob) {
  ctx.fillStyle = "white";
  ctx.fillRect(blob.x, blob.y, blob.size, blob.size);
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H);
}

function updateBlob(blob) {
  blob.x += blob.xSpeed;
  blob.y += blob.ySpeed;
  blob.size += 0.98;
}