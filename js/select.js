window.onload=function(){

	$("#search_input").bind("keyup",function(){

			$("#search_list").show().css({
				top:$(".search_bar").offset().top+$(".search_bar").height(),
				left:$(".search_bar").offset().left,
				position:"absolute"
			});
		}
	);
	$(document).bind("click",function(){
		$("#search_list").hide();
	});
	$('#like').click(function(){
		$(this).toggleClass('like')
	});

}
