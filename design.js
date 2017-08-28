$(document).ready(function() {

	$("#scrolldown").click(function() { /*select class that triggers scroll*/
		$('html, body').animate({
			scrollTop: $("#ourprocess").offset().top - 100 /*class you want to scroll to!!*/
		}, 1000); /*animation time length*/
	});


	$('.burger').click(function() {

		if (!$('#burger').is(':checked')) {

			$("#top").css('transform', 'rotate(45deg)').css('transition', 'all 0.4s ease-in-out');
			$("#top").animate({
				marginTop: "0.5em",
			}, 200, function() {
				// Animation complete.
			});

			$("#bottom").css('transform', 'rotate(-45deg)').css('transition', 'all 0.4s ease-in-out');
			$("#bottom").animate({
				marginTop: "-0.4em",
			}, 200, function() {
				// Animation complete.
			});


			$('.mobile-menu').css('visibility', 'visible');
			$('.mobile-menu').fadeIn();
			$('.mobile-menu a').css('animation', 'panup 1s ease-in-out');



		} else if ($('#burger').is(':checked')) {

			$("#top").css('transform', '').css('margin-top', '');
			$("#bottom").css('transform', '').css('margin-top', '');
			$('.mobile-menu a').css('animation', 'panout 1s ease-in-out');
			$('.mobile-menu').fadeOut();




		}

	});




});
