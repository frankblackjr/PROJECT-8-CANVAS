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

//Circle object
function Circle(x, y) {
	this.x = x;
	this.y = y;

	this.draw = function() {
		c.beginPath();
		c.arc(x, y, radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
	};
}


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
//New circle object
var circle = new Circle(x, y);
var dx = (Math.random() - 0.5) * 20; //dx = x velocity
var dy = (Math.random() - 0.5) * 20; //dy = y velocity
var radius = Math.random() * 30;

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();
	circle.draw();
	//Conditionals: change x or y velocity to prevent circle from moving off screen.
	//x + radius > innerWidth  , means that if the location of the circles edge if greater than the width of the screen reverse velocity.
	//(circle edge = x - radius. the x value is the center of the circle)
	//The same applies to the y velocity.
	if (x + radius > innerWidth || x - radius < 0) {
		dx = -dx;
	}

	if (y + radius > innerHeight || y - radius < 0) {
		dy = -dy;
	}
	x += dx;
	y += dy;
}

animate();
