/*
Canvas tut https://www.youtube.com/watch?v=83L6B13ixQ0
*/
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//Rectangles

//c.fillStyle = "rgb, text or Hex color"
//all rectangles will take the color of the fillStyle precede it.
c.fillStyle = 'rgba(100, 255, 0, 0.2)';
//context.fillRect(x, y, w, h);
c.fillRect(100, 100, 100, 100);
c.fillStyle = "yellow";
c.fillRect(300, 100, 100, 100);
c.fillStyle = "#f3f3f3";
c.fillRect(500, 100, 100, 100);

// Line
c.beginPath();

// moveTo(x, y) Starting point. (Not displayed)
c.moveTo(100, 200);

// c.lineTo(x, y) where the line will be drawn to.
c.lineTo(100, 300);
c.lineTo(400, 300);
c.lineTo(400, 200);
c.lineTo(100, 200);

//c.strokeStyle = "rgb, text or Hex color"
c.strokeStyle = "#a43d63";
// c.stroke(); calls the stroke fuction to draw the line.
c.stroke();

// Arc / Circle
//c.arc(x: int, y: int, r:int, startAngle: float, endAngle: Float, drawCounterClockwise: bool);
c.beginPath();
c.arc(400, 300, 100, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

//Making multiple shapes
for (var i = 0; i < 10; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 100, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
}

/*
Challenge Randomize colors of circles.
*/
