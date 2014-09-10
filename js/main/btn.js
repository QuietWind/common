define(['jquery'], function($) {

	return function changeBgColor(color) {

		console.log($('body'));
		$('.ui-content').css({'background':color});
	}

});