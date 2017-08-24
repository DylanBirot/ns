$(document).ready(function() {

	var prevScroll = 0;

	$(window).scroll(function(event) {

		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);

		if (scrollTop > 200 && scrollTop < 800) {

			if (scrollTop > prevScroll) {
				$('.design-content').css('top', '-=0.8');
				$('.design-content > h1').css('padding-bottom', '+=0.1');
				$('.design-content > h1').css('letter-spacing', '+=0.01');
				$('.design-content > h1').css('font-size', '+=0.01');
			}

			if (scrollTop < prevScroll) {
				$('.design-content').css('top', '+=0.8');
				$('.design-content > h1').css('padding-bottom', '-=0.1');
				$('.design-content > h1').css('letter-spacing', '-=0.01');
				$('.design-content > h1').css('font-size', '-=0.01');

			}
		}

		prevScroll = scrollTop

	});

});
