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
var colors = ['#FF00CC', '#EF6037', '#66FF66', '#FFFF66', '#FF3855', '#50BFE6', '#FDFF00', '#87FF2A', '#FFD3F8', '#3AA8C1', "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1", "#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0", "#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00", "#9348af", "#01ac53", "#c5a4fb", "#996635", "#b11573", "#4bb473", "#75d89e", "#2f3f94", "#2f7b99", "#da967d", "#34891f", "#b0d87b", "#ca4751", "#7e50a8", "#c4d647", "#e0eeb8", "#11dec1", "#289812", "#566ca0", "#ffdbe1", "#2f1179", "#935b6d", "#916988", "#513d98", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d", "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977", "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b", "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf", "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234", "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158", "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3", "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec", "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3", "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec", "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7", "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8", "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16", "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce", "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997", "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be", "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba", "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043", "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56", "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f", "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49", "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9", "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4", "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06", "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a", "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065", "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35", "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44", "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67", "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff", "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6", "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"];
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
function Circle(x, y, dx, dy, radius, rando) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = colors[rando];
		c.stroke();
		c.fill();
	};
	this.update = function() {
		//Conditionals: change x or y velocity to prevent circle from moving off screen.
		//x + radius > innerWidth  , means that if the location of the circles edge if greater than the width of the screen reverse velocity.
		//(circle edge = x - radius. the x value is the center of the circle)
		//The same applies to the y velocity.
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	};
}

//Circle array stores all of the circle objects created in the for loop.
var circleArray = [];
for (var i = 0; i < 1500; i++) {
	var radius = Math.random() * 30;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 5; //dx = x velocity
	var dy = (Math.random() - 0.5) * 5; //dy = y velocity
	var rando = Math.floor(Math.random() * 290);
	console.log(colors.length);
	//New circle object
	circleArray.push(new Circle(x, y, dx, dy, radius, rando));
}

console.log(circleArray);

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
