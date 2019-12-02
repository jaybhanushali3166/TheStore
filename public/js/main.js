$(document).ready(function() {

	// View More 

	$(function() {
		$(".single-book").slice(0,4).show();
		var size = $(".single-book").size();
		var show = 4;
		console.log("size:",size);		
		$('#viewless').hide();
		 // select the first all
		$("#viewmore").click(function(e) { 

			$('#viewless').show();
			$('#viewmore').hide();
			e.preventDefault();
			console.log("array: ",$(".single-book"));
			$(".single-book:hidden").slice(0, size).show(300);
			console.log("array after: ",$(".single-book"));


		});

		$('#viewless').click( function(e){

			$('#viewmore').show();
			$('#viewless').hide();
			e.preventDefault();
			console.log("array in less: ",$(".single-book"));
			
			$(".single-book").slice(show, size).hide(300); 			

		})
	  });
  

	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');

		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	
});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});