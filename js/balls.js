/**
 * Created by Administrator on 2017/2/4 0004.
 */
var balls=[];
window.onload=function() {
    var canvas = document.getElementById("canvas");
    var context=canvas.getContext('2d');
    for(var i=0;i<20;i++){
        var R=Math.floor(Math.random()*255);
        var G=Math.floor(Math.random()*255);
        var B=Math.floor(Math.random()*255);
        var radius=Math.random()*50+20;
        aball={
            color:'rgba('+R+','+G+','+B+','+0.5+')',
            radius:radius,
            x:Math.random()*(canvas.width-2*radius)+radius,
            y:Math.random()*(canvas.height-2*radius)+radius,
            vx:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100)),
            vy:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100))
        }
        balls[i]=aball;
    }
    context.fillStyle='white';
    context.fillRect(0,0,canvas.width,canvas.height);
    setInterval(function () {
        draw(context);
        update(canvas.width,canvas.height);
    },50);
}
function draw(cxt){
    var canvas=cxt.canvas;
    cxt.clearRect(0,0,canvas.width,canvas.height);

    cxt.fillStyle='white';
    cxt.fillRect(0,0,canvas.width,canvas.height);

    for(var i=0;i<balls.length;i++){

        cxt.fillStyle=balls[i].color;
        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,balls[i].radius,0,Math.PI*2);
        cxt.closePath();
        cxt.fill();
    }
}
function update(canvasWidth,canvasHeight){
    for(var i=0;i<balls.length;i++){
        balls[i].x+=balls[i].vx;
        balls[i].y+=balls[i].vy;
        if(balls[i].x-balls[i].radius<=0){
            balls[i].vx=-balls[i].vx;
            balls[i].x=balls[i].radius;
        }
        if(balls[i].x+balls[i].radius>=canvasWidth){
            balls[i].vx=-balls[i].vx;
            balls[i].x=canvasWidth-balls[i].radius;
        }
        if(balls[i].y-balls[i].radius<=0){
            balls[i].vy=-balls[i].vy;
            balls[i].y=balls[i].radius;
        }
        if(balls[i].y+balls[i].radius>=canvasHeight){
            balls[i].vy=-balls[i].vy;
            balls[i].y=canvasHeight-balls[i].radius;
        }
    }
}
