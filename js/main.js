var can;
var ctx;

var w;
var h;

var deltaTime;
var lastTime;

document.body.onload=init;
function init() {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");
	w=can.width;
	h=can.height;
	sky();
}
function sky() {
	var radialGrad = ctx.createRadialGradient(w/ 2, h, 0,w / 2, h, h);
	radialGrad.addColorStop(0.0, '#035');
	radialGrad.addColorStop(1.0, 'black');
	ctx.fillStyle = radialGrad;
	ctx.fillRect(0, 0, w, h);
}
