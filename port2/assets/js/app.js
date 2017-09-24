$( document ).ready(function() {
	$('input[type=range]').attr('max', 0);
	$('input[type=range]').attr('min', -$('.elements').width()/2 - 100);
	$('input[type=range]').attr('value', -$('.elements').width()/4);
	$('.elements').css('left', -$('.elements').width()/4);

	$('input[type=range]').on("change mousemove", function(){
		$('.elements').css('left', $(this).val()+'px')
	});
});