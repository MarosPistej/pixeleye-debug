const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;

const cwidth = canvas.width;
const cheight = canvas.height;

function drawGame() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, cwidth, cheight);
  ctx.beginPath();
  ctx.arc(cwidth / 2, cheight / 2, cwidth * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#FF0";
  ctx.fill();

  canvas.setAttribute("data-testid", "drawing-done");
}

drawGame();
