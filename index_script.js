

// var full = $('.search_bar').css("width","100%");
// var w0 = $('.search_bar').css("width","0");

$(".circle").click(function(){

  if($('.search_bar').hasClass('test')){
    $('.search_bar').animate({width:"100%"},300);
    $('.search_button .circle #zoom').animate({right:'-50px'},300);

 	$('.search_button .circle #left').animate({right:'12px'},300);
  } else {
    $('.search_bar').animate({width:"0"},300);
    $('.search_button .circle #zoom').animate({right:'11px'},300);

 	$('.search_button .circle #left').animate({right:'-50px'},300,function(){
 	});
  }

  $('.search_bar').toggleClass('test');

})

// =============================

$('.login_container .email label').click(function(){
	$('.login_container .input_icon1 .mail').animate({height:'35px'}, 300);
	$(this).animate({bottom:'45px'}, 300);

	$('.login_container .input_icon1 i').animate({opacity: '1'}, 300);

	$('.login_container .input_icon1 .mail').attr('placeholder' , 'Email');
	
})


$('.login_container .pass label').click(function(){
	$('.login_container .input_icon2 .pass_word').animate({height:'35px'}, 300);
	$(this).animate({bottom:'45px'}, 300);
	$('.login_container .input_icon2 i').animate({opacity: '1'}, 300);

	$('.login_container .input_icon2 .pass_word').attr('placeholder' , 'Password');
})


