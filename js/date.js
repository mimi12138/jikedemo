function checkTime(i){
if(i<10)
{
i="0"+i;
}
return i;
}
function showTime(){
var myDate=new Date();
var year=myDate.getFullYear();
var month=myDate.getMonth()+1;
var date=myDate.getDate();
var day=myDate.getDay();
var hour=myDate.getHours();
var minute=myDate.getMinutes();
var second=myDate.getSeconds();
minute=checkTime(minute);
second=checkTime(second);
var weekday=new Array(7);
weekday[0]="星期日";
weekday[1]="星期一";
weekday[2]="星期二";
weekday[3]="星期三";
weekday[4]="星期四";
weekday[5]="星期五";
weekday[6]="星期六";
document.getElementById("show").innerHTML=year+"年"+month+"月"+date+"日"+weekday[day]+hour+":"+minute+":"+second;
setTimeout(showTime,500);
}
