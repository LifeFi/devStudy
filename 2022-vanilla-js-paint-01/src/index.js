const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

ctx.arc(300, 150, 100, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(260, 120, 15, Math.PI, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(340, 120, 15, Math.PI, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(300, 160, 50, 0, Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(250, 270, 100, 300);

ctx.beginPath();
ctx.fillRect(205, 270, 25, 150);
ctx.fillRect(370, 270, 25, 150);
