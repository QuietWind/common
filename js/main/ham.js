define(['jquery','hammer'],function($){
	var hammer=$('#ham');
	var ham=new Hammer(hammer);

	ham.on('pan',function(ev){
		console.log(ev);
	});
});