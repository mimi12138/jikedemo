/**
 * Created by Administrator on 2017/3/8 0008.
 */
window.onload=function(){
    var list=$(".menubar li");
    for(var i=0;i<list.length;i++)
    {
        list[i].i=i;
        list[i].onmouseover=function(){
            this.className="lihover";
            this.getElementsByTagName("div")[0].style.left=this.offsetLeft+214+'px';
            var h0=(this.i-1)*30+101;
            var y=this.getElementsByTagName("div")[0].offsetHeight;/*整个悬浮层的高度*/
            var h=this.getElementsByTagName("div")[0].style.top+y;/*悬浮层下沿距离页面顶端的高度*/
            if(h<h0)/*若悬浮层太短，则要和当前一级菜单对齐*/
            {
                this.getElementsByTagName("div")[0].style.top=h0+"px";
            }
            if(y>550){/*若浏览器窗口较小，将悬浮层上移一些*/
                this.getElementsByTagName("div")[0].style.top="60px";
            }
        }
        list[i].onmouseout=function(){
            this.className=" ";
        }
    }
   var length= $('.page li').length;
    if(length>8) {
        $('.more').show();
    }
    else{
        $('.more').hide();
    }
    var clist=$('.course').length;
    if(clist>3&&clist<7){
        $('.course_box').css({
            height:'604'
        });
    }
    if(clist>6&&clist<10){
        $('.course_box').css({
            height:'906'
        });
    }
}