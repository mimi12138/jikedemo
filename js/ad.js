/**
 * Created by Administrator on 2017/2/3 0003.
 */
window.onload=function() {
    var canvas = document.getElementById("canvas");
    var context=canvas.getContext('2d');
   /*var backStyle=context.createLinearGradient(0,0,canvas.width,0);//自顶向下,(0,0,800,0)自左向右,(0.0.800.800)对角线
    backStyle.addColorStop(0.0,'#0b2b16')//关键色取值点和颜色,0.0为最小1.0为最大
    backStyle.addColorStop(0.1,'#174466');
    backStyle.addColorStop(0.25,'#5d9fc9');
    backStyle.addColorStop(0.5,'#35748f');
    backStyle.addColorStop(0.7,'#4b0082');
    backStyle.addColorStop(1.0,'#191970');
    context.fillStyle=backStyle;
    context.fillRect(0,0,canvas.width,canvas.height);*/

  context.lineWidth=5;
  context.strokeStyle='black';
  context.fillStyle='black';
  context.lineCap='round';
  context.beginPath();
  context.arc(140,250,35,0,2*Math.PI,true);
  context.stroke();
  context.beginPath();
  context.moveTo(150,285);
  context.lineTo(160,370);
  context.lineTo(105,420);
  context.lineTo(120,480);
  context.lineTo(110,480);
  context.stroke();
  context.beginPath();
  context.moveTo(160,370);
  context.lineTo(200,430);
  context.lineTo(240,460);
  context.lineTo(235,470);
  context.stroke();
  context.beginPath();
  context.moveTo(150,285);
  context.lineTo(130,340);
  context.lineTo(90,350);
  context.stroke();
  context.beginPath();
  context.moveTo(150,285);
  context.lineTo(190,320);
  context.lineTo(170,370);
  context.stroke();


  context.beginPath();
  context.arc(700,250,35,0,2*Math.PI,true);
  context.stroke();
  context.beginPath();
  context.moveTo(700,285);
  context.lineTo(700,370);
  context.lineTo(670,470);
  context.lineTo(660,470);
  context.stroke();
  context.beginPath();
  context.moveTo(700,370);
  context.lineTo(720,470);
  context.lineTo(710,470);
  context.stroke();
  context.beginPath();
  context.moveTo(700,285);
  context.lineTo(660,300);
  context.lineTo(640,260);
  context.stroke();
  context.beginPath();
  context.moveTo(700,285);
  context.lineTo(730,330);
  context.lineTo(730,290);
  context.stroke();
}

