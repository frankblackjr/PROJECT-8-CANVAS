/*jshint esversion: 6 */
/*
Canvas tut https://www.youtube.com/watch?v=yq2au9EfeRQ
*/
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//Rectangles

//c.fillStyle = "rgb, text or Hex color"
//all rectangles will take the color of the fillStyle precede it.
/*
c.fillStyle = 'rgba(100, 255, 0, 0.2)';
*/
//context.fillRect(x, y, w, h);
/*
c.fillRect(100, 100, 100, 100);
c.fillStyle = "yellow";
c.fillRect(300, 100, 100, 100);
c.fillStyle = "#f3f3f3";
c.fillRect(500, 100, 100, 100);
*/
// Line
/*
c.beginPath();
*/
// moveTo(x, y) Starting point. (Not displayed)
/*
c.moveTo(100, 200);
*/

// c.lineTo(x, y) where the line will be drawn to.
/*
c.lineTo(100, 300);
c.lineTo(400, 300);
c.lineTo(400, 200);
c.lineTo(100, 200);

//c.strokeStyle = "rgb, text or Hex color"
/*
c.strokeStyle = "#a43d63";
*/
// c.stroke(); calls the stroke function to draw the line.
/*
c.stroke();
*/

// Arc / Circle
//c.arc(x: int, y: int, r:int, startAngle: float, endAngle: Float, drawCounterClockwise: bool);
/*
c.beginPath();
c.arc(400, 300, 100, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
*/
//var colors = ['red', 'blue', 'pink', 'orange', 'black', 'olive', 'green', 'aqua', 'teal', 'maroon'];
//Making multiple shapes
/*
for (var i = 0; i < 10; i++) {
  var rando = Math.floor(Math.random()*10);
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 100, 0, Math.PI * 2, false);
  c.fillStyle = colors[rando];
  c.fill();
  c.strokeStyle = colors[rando];
  c.stroke();
}

*/

// Animations


var x = 200;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, 300, 100, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
   x += 1;
}

animate();
