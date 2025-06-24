$( document ).ready(function() {
	$(".link").click(function(e) {
		e.preventDefault();
		$('.photos div').fadeOut("slow");
		$('#' + $(this).attr('rel')).fadeIn("slow");
	});
});