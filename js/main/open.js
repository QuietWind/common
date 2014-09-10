define(['jquery'], function($) {


	$('#test').html('陈欢 在这儿');

	$('[w-role="button"]').addClass("btn-red").click(function(event) {
		/* Act on the event */

		// alert('i can do it ,i belive my heart!');

		// confirm('nimeimei');

		// var a=confirm('nimeimei');

		// if(a){
		// 	console.log('yang yue love me');
		// }else{
		// 	console.log('she don`t love me');
		// }

		$('#dialog').load('page/dialog.html',function(event){
			$('.close').click(function(event) {
				/* Act on the event */

				$('#dialog').html('');

			});
		});

	});;
});