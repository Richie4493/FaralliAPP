$(document).ready(function() {

	function resizeIt(domElement){
		var dW = $(window).width();
		var dH = $(window).height();

		$(domElement).css({
			'width': dW,
			'height': dH
		});
	}

	resizeIt($('iframe'));

	$(window).on('resize', function() {
		resizeIt($('iframe'));
	});
});