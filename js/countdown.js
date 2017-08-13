var WINDOW_WIDTH;
var WINDOW_HEIGHT;
var RADIUS;//小球半径
var MARGIN_TOP;//每个数字距离画布的上边距
var MARGIN_LEFT;//第一个数字距离画布的左边距

//var endtime=new Date();//距离当前日期不能超过四天，因为hours是两位数，最多24*4=96，可以增加位数来改变
//endtime.setTime(endtime.getTime()+3600*1000);//距离当前时间一个小时开始倒计时
var curShowTimeSeconds=0;//现在倒计时还有多少秒

var balls=[];//存放小球的数组
window.onload=function(){
	WINDOW_WIDTH=document.body.scrollWidth||document.documentElement.scrollWidth;
	WINDOW_HEIGHT=document.body.scrollHeight||document.documentElement.scrollHeight;
	MARGIN_LEFT=Math.round(WINDOW_WIDTH/10);
	RADIUS=Math.round(WINDOW_WIDTH*4/5/108)-1;
	MARGIN_TOP=Math.round(WINDOW_HEIGHT/5);
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");
	
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	curShowTimeSeconds=getCurShowTimeSeconds();
	setInterval(
		function(){
			render(context);//绘制
			update();//改变
		},50
	)
	
}
function render(cxt){//绘制时间和小球
	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
	var hours=parseInt(curShowTimeSeconds/3600);
	var minutes=parseInt((curShowTimeSeconds-hours*3600)/60);
	var seconds=curShowTimeSeconds%60; 
	
	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);//时针的十位数
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);//时针的个位数
	renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);//冒号
	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);//分针的十位数
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);//分针的个位数
	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);//冒号
	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);//秒针的十位数
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);//秒针的个位数
	for(var i=0;i<balls.length;i++){
		cxt.fillStyle=balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
		cxt.closePath();
		cxt.fill();
	}
}
function renderDigit(x,y,num,cxt){//(x,y)为数组起点位置，i为行数，j为列数
	cxt.fillStyle="rgb(0,102,153)";//给每一个小球填充颜色
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.closePath();
				
				cxt.fill();
			}
		}
	}
	
}
function getCurShowTimeSeconds(){
	var curTime=new Date();
	/*倒计时算法
	var ret=endtime.getTime()-curTime.getTime();
	ret=Math.round(ret/1000);//毫秒转换为秒
	return ret>=0?ret:0;*/
	//时针算法
	var ret=curTime.getHours()*3600+curTime.getMinutes()*60+curTime.getSeconds();
	return ret;
}
function update(){
	var nextShowTimeSeconds=getCurShowTimeSeconds();
	var nexthours=parseInt(nextShowTimeSeconds/3600);
	var nextminutes=parseInt((nextShowTimeSeconds-nexthours*3600)/60);
	var nextseconds=nextShowTimeSeconds%60; 
	
	var curhours=parseInt(curShowTimeSeconds/3600);
	var curminutes=parseInt((curShowTimeSeconds-curhours*3600)/60);
	var curseconds=curShowTimeSeconds%60; 
	
	if(nextseconds!=curseconds){
		if(parseInt(curhours/10)!=parseInt(nexthours/10)){
			addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curhours/10));
		}
		if(parseInt(curhours%10)!=parseInt(nexthours%10)){
			addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curhours/10));
		}
		if(parseInt(curminutes/10)!=parseInt(nextminutes/10)){
			addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(curminutes/10));
		}
		if(parseInt(curminutes%10)!=parseInt(nextminutes%10)){
			addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curminutes/10));
		}
		if(parseInt(curseconds/10)!=parseInt(nextseconds/10)){
			addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curseconds/10));
		}
		if(parseInt(curseconds%10)!=parseInt(nextseconds%10)){
			addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curseconds/10));
		}
		curShowTimeSeconds=nextShowTimeSeconds;
	}
	updateballs();
}
function updateballs(){
	
	for(var i=0;i<balls.length;i++){
		balls[i].x+=balls[i].vx;
		balls[i].y+=balls[i].vy;
		balls[i].vy+=balls[i].g;
		
		if(balls[i].y>=WINDOW_HEIGHT-RADIUS){
			balls[i].y=WINDOW_HEIGHT;
			balls[i].vy=-balls[i].vy*0.75;
		}
	}
	//将跳出屏幕外的小球清除，优化性能
	var count=0;
	for(var i=0;i<balls.length;i++){
		if(balls[i].x+RADIUS>0&&balls[i].x-RADIUS<WINDOW_WIDTH){
			balls[count++]=balls[i];
		}
	}
	while(balls.length>Math.min(300,count)){
		balls.pop();
	}
}
function addBalls(x,y,num){
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				var aball={
					x:x+j*2*(RADIUS+1),
					y:y+i*2*(RADIUS+1),
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,//Math.pow(-1,Math.cell(Math.radom()*1000))这句话得到的结果是随机正负1
					vy:-5,//也可随机
					color:getRandomColor()
				}
				balls.push(aball);
			}
		}
	}
}
function getRandomColor()
{
	var c='#';
	var cArray=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	for(var i=0;i<6;i++)
	{
		var cIndex=Math.round(Math.random()*15);
		c+=cArray[cIndex];
	}
	return c;
}