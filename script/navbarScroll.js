$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('.nav').addClass('change');
    	$('.nav-tab-big').addClass('change2');
    }
    else {
    $('.nav').removeClass('change');
	$('.nav-tab-big').removeClass('change2');

    }
  });
});