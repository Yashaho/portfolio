$(document).ready(function(){
    $('.about').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;' 
	});


    $('.home-js').click(function(){
		$('html, body').animate({scrollTop: $('.banner ').offset().top}, 1500);
    });

    $('.about-js').click(function(){
		$('html, body').animate({scrollTop: $('.about').offset().top}, 1500);
    });
    $('.projects-js').click(function(){
		$('html, body').animate({scrollTop: $('.projects').offset().top}, 1500);
	});

	$('.contact-js').click(function(){
		$('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);
    });
    




    
});


window.sr = ScrollReveal();
    sr.reveal('.facebook',{
        duration: 1500
    });
    sr.reveal('.github',{
        duration: 1500
    });
    sr.reveal('.sr-para',{
        origin: "left",
        duration: 1500,
        delay: 500
    });
    sr.reveal(".img-thumbnail", {
        origin: "bottom",
        duration: 1000,
        delay: 300
    });
   
    $('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i')

		nav.slideToggle(200);
		/* switch from hamburger to cross icon */
		if (icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});
