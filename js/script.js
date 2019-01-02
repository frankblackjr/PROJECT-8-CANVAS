/*
Canvas tut https://www.youtube.com/watch?v=EO6OkltgudE
*/
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//Rectangles
//context.fillRect(x, y, w, h);
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 100, 100, 100);
c.fillRect(500, 100, 100, 100);

//Lines
c.beginPath();
//moveTo(x, y) Starting point.
c.moveTo(50, 300);
