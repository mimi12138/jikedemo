/**
 * Created by Administrator on 2017/2/2 0002.
 */
window.onload=function(){
    var aA=document.getElementsByName('aa');
    for(var i=0; i<aA.length; i++){
        aA[i].onmouseover=function(){
            var This=this;
            clearInterval(This.time);
            This.time=setInterval(function(){
                This.style.width=This.offsetWidth+8+"px";
                if(This.offsetWidth>=210)
                    clearInterval(This.time);
            },30)
        }
        aA[i].onmouseout=function(){
            clearInterval(this.time);
            var This=this;
            this.time=setInterval(function()
            {
                This.style.width=This.offsetWidth-8+"px";
                if(This.offsetWidth<=190)
                {
                    This.style.width='190px';
                    clearInterval(This.time);
                }
            },30)
        }
    }
}