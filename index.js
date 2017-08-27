$(document).ready(function() {

	var menu_active = false;

	$("#scrolldown").click(function() { /*select class that triggers scroll*/
		$('html, body').animate({
			scrollTop: $("#design").offset().top /*class you want to scroll to!!*/
		}, 1000); /*animation time length*/
	});


	$('.burger').click(function() {
		
				if( !$('#burger').is(':checked')) {
					
					$( "#top" ).css('transform', 'rotate(45deg)').css('transition','all 0.4s ease-in-out');
					$( "#top" ).animate({
						marginTop: "0.5em",
					  }, 200, function() {
						// Animation complete.
					  });

					$( "#bottom" ).css('transform', 'rotate(-45deg)').css('transition','all 0.4s ease-in-out');
					$( "#bottom" ).animate({
						marginTop: "-0.4em",
					}, 200, function() {
						// Animation complete.
					});
  

					$('.mobile-menu').css('visibility', 'visible');
					$('.mobile-menu').fadeIn();
					$('.mobile-menu a').css('animation', 'panup 1s ease-in-out');

					

				} else if ( $('#burger').is(':checked')) {

					$( "#top" ).css('transform', '').css('margin-top', '');
					$( "#bottom" ).css('transform', '').css('margin-top', '');
					$('.mobile-menu a').css('animation', 'panout 1s ease-in-out');
					$('.mobile-menu').fadeOut();
					
					
				

				}
				
			});


	/*var prevScroll = 0;

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

	}); */

});
