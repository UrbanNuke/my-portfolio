$(function(){
	$('.slick').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: '.arrow_right',
	  prevArrow: '.arrow_left',
	  dots: true,
	  responsive: [
    	{
	      breakpoint: 992,
	      settings: {
	      	slidesToShow: 2,
	        slidesToScroll: 1,
	      }},
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	      }

	    }]

	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 1700) {
		    $('.flying-el-service').fadeIn(2800);
		}
	});
	
})