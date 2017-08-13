/**
 * Created by Administrator on 2017/1/30 0030.
 */
var WINDOW_WIDTH;
var WINDOW_HEIGHT;
var can=document.getElementById('canvas');
var cxt=canvas.getContext('2d');
var balls=[];

window.onload=function(){
    backcolor();
    setInterval(function(){
        backcolor();
    },500);

}
function backcolor(){
    var R=Math.floor(Math.random()*255);
    var G=Math.floor(Math.random()*255);
    var B=Math.floor(Math.random()*255);
    var radialGrad = cxt.createRadialGradient(canvas.width / 2, can.height, can.height/2, can.width / 2, can.height, can.height);
    radialGrad.addColorStop(0.0, 'rgb('+R+','+G+','+B+')');
    radialGrad.addColorStop(1.0, 'black');
    cxt.fillStyle = radialGrad;
    cxt.fillRect(0,0,can.width,can.height);
}
