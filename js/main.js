requirejs.config({
	baseUrl: 'js/main',
	paths: {
		'jquery': '../../libs/jquery/jquery.min',
		'jqueryMobile': '../../libs/jquery/jquery.mobile-1.4.3.min'
	},
	skim: {

	}
});

require(['btn','alert','open'], function(btn) {

	var btn=btn;


	console.log(btn);

	btn('red');

});