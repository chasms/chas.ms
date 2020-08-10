$(document).ready(function() {
	$(".header").click(function(){
		var h= $(this).height();
		if(h==60){
			var goal = 530;
		} else {
			var goal = 60;
		}
		$(this).animate({
       		height: goal
       	}, 300, function(){	
       	});
    });
})