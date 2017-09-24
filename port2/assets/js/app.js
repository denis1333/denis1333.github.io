$( document ).ready(function() {
	$('input[type=range]').attr('max', $('.elements').width()/2 + 100);
	$('input[type=range]').attr('min', 0);
	$('input[type=range]').attr('value', 0);

	$('input[type=range]').on("change mousemove", function(){
		$('.elements').css('left', -$(this).val()+'px')
	});
});