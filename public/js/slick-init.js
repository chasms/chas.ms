$(document).ready(function (){
      $('.slick-gallery').slick({
      
        accessibility: 		true,
        adaptiveHeight: 	false,
        autoplay: 			false,
        autoplaySpeed: 		3000,
        arrows: 			true,
        centerMode: 		false,
        centerPadding:		'50px',
        cssEase:			'ease-in-out',
        dots: 				true,
        draggable: 			true,
        fade:				false,
        focusOnSelect:		false,
        easing:				'swing',
      	infinite: 			true,
      	initialSlide:		0,
      	lazyLoad:			'progressive',
      	pauseOnHover:		true,
      	pauseOnDotsHover:	false,
      	respondTo:			'min',
      	rows:				1,
 		slidesPerRow:		1,				
      	slidesToShow: 		1,
      	slidesToScroll:		1,
      	speed:				500,
	  	swipe: 				true,
	  	swipeToSlide: 		true,
	  	touchMove: 			true,
	  	touchThreshold:		5,
	  	useCSS:				true,
	  	variableWidth:		false,
	  	vertical:			false,
	  	verticalSwiping:	false,
	  	rtl:				false,
      
      });
    });