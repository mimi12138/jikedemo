/**
 * Created by Administrator on 2017/3/15 0015.
 */
window.onload=function(){
    var timeline=document.getElementById("timeline");


    for(var i=0;i<60;i++){
        var newdiv=document.createElement("span");
        newdiv.className='point';
        timeline.appendChild(newdiv);

    }
    var list=$('#timeline span');
    for(var i=0;i<list.length;i++){
        list[i].i=i;
        list[i].onmouseover=function(){
            this.style.height='15px';
            this.style.width='25px';
            //�����ݿ����ݱȽϣ�����˿�i����ͨ�ģ�this.style.background-color='green';����this.style.background-color='red';
        }
        list[i].onmouseout=function(){
            this.style.height='8px';
            this.style.width='12px';
            this.style.cursor='pointer';
            this.style.backgroundColor='transparent';
        }
    }
    //�����ݿ����ݱȽϣ��������ͨ $('.status').innerHTML='����ͨ';����$('.status').innerHTML='��ͨ';
    $(".order").click(function(){
        $("#ordermodal").modal("toggle");
    });

}