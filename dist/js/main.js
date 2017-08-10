$(document).ready(function() {

	// html2canvas
	$('.click').click(function() {
		var item = $('.text'),
			imageWidth = $('.text').outerWidth(),
			name = $('.js-takeName').val();
		if(name == '' || name == null || name == undefined) {
			$('.js-takeName').addClass('error');
		} else {
			$('.js-name').html(name);
			html2canvas(item, {
				onrendered: function(canvas) {
					document.body.appendChild(canvas);
				},
				width: imageWidth
			});

			setTimeout(function(){
				var can = document.getElementsByTagName("canvas");
				var img    = can[0].toDataURL("image/png");

				$('#book').flipBook({
					pages:[
					{src:img, thumb:img, title:"Cover"},
					{src:"img/page2.jpg", thumb:"img/page2.jpg", title:"Page two"},
					{src:"img/page3.jpg", thumb:"img/page3.jpg", title:"Page three"},
					{src:"img/page4.jpg", thumb:"img/page4.jpg", title:"Page three"},
					{src:"img/page5.jpg", thumb:"img/page5.jpg", title:"Page five"},
					{src:"img/page6.jpg", thumb:"img/page6.jpg", title:"Page six"},
					{src:"img/page7.jpg", thumb:"img/page7.jpg", title:"Page seven"},
					{src:"img/page8.jpg", thumb:"img/page8.jpg", title:"Last"}
					]
				});


			},100);
		}


		return false;
	});

	
	

});