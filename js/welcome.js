/**
 * Created by Administrator on 2017/2/3 0003.
 */
window.onload=function() {
    window.onscroll= function () {
        if(getScrollTop()){
            $('.header').css({
                position:'fixed',
                top:'0'
            })
            $('.nav_left').show();
        }
        else{
            $('.header').css({
                position:'inherit',
                top:'150'
            })
            $('.nav_left').hide();
        }
    }
}
function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset; }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    { scrollPos = document.documentElement.scrollTop; }
    else if (document.body) { scrollPos = document.body.scrollTop; }
    if(scrollPos>=150){
        return true;
    }
    else{
        return false;
    }
}
