;(function ($, portfolio, undefined) {

	var heroSlider = function(){
		var hero = $('.hero'),
			slides = hero.children();

		if (slides.length > 1) {
			hero.slick({
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 6000,
				arrows: false,
				dots: true,
				vertical: true,
				verticalSwiping: true
			});
		}
	};

	var teamCarousel = function(){
		var team = $('.team-members'),
			members = team.children(),
			wrap = team.parent();

		if (members.length > 3) {
			team.slick({
				arrows: true,
				dots: true,
				infinite: true,
				appendArrows: wrap,
				appendDots: wrap,
				slidesToShow: 3,
				slidesToScroll: 3,
				prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left fa-5x" aria-hidden="true"></i></div>',
				nextArrow: '<div class="slick-next"><i class="fa fa-angle-right fa-5x" aria-hidden="true"></i></div>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
	};

	var testimonialsCarousel = function(){
		var testimonials = $('.testimonial-list'),
			items = testimonials.children();

		if (items.length > 1) {
			testimonials.slick({
				arrows: false,
				adaptiveHeight: true,
				dots: true,
				infinite: true
			});
		}
	};

	var projectSlideshow = function(){
		var projectSlideshow = $('.project-slideshow'),
			slides = projectSlideshow.children(),
			arrowContainer = $('<div></div>', {'class': 'project-arrows'}).insertBefore(projectSlideshow),
			wrap = projectSlideshow.parent();

		if (slides.length > 1) {
			projectSlideshow.slick({
				arrows: true,
				adaptiveHeight: true,
				dots: true,
				infinite: true,
				appendArrows: arrowContainer,
				appendDots: wrap,
				prevArrow: '<button type="button" class="slick-prev">Prev</button>'
			});
		}
	};

	var animateScroll = function(){
		var keepScroll = false;

		$('a[href^="#"]').on('click', function(e){
			e.preventDefault();
			history.pushState({}, '', e.target.href);
			$(window).trigger('hashchange');
		});

		$(window).on('hashchange', function(e){
			var hash = window.location.hash,
				target = $(hash),
				scrollTo = 0;
			if (hash && target.length) {
				scrollTo = target.offset().top;
			}
			$('html, body').animate({scrollTop: scrollTo}, 1000);
		});
	};

	var instagramFeed = function(){

		/* Paste your sample code here */

		var feed = new Instafeed({
			get: 'user',
			useHttp: true,
			limit: 5,
			resolution: 'low_resolution',
			userId: '',
			clientId: '',
			accessToken: ''
		});

		/* Stop pasting! No more changes after this point */

		feed.run();
	};

	portfolio.init = function() {
		heroSlider();
		teamCarousel();
		testimonialsCarousel();
		projectSlideshow();
		animateScroll();
		instagramFeed();
	};

}(jQuery, window.portfolio = window.portfolio || {}));


jQuery(function(){
	portfolio.init();
});