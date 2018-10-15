// **------------------------**
// search button example

$(".circle").click(function(){

  if($('.search_bar').hasClass('open')){
    $('.search_bar').animate({width:"100%"},300);
    $('.search_button .circle #zoom').animate({right:'50px'},200);

 	$('.search_button #left').animate({right:'15px'},300);

  } else {
    $('.search_bar').animate({width:"0"},300);
    $('.search_button .circle #zoom').animate({right:'14px'},200);

 	$('.search_button #left').animate({right:'-50px'},300,function(){
 	});
  }

  $('.search_bar').toggleClass('open');

})

// **----------------------------------**
// Login form example

$('.login_container .email label').click(function(){

  if($('.login_container .input_icon1 .mail').hasClass("toggle")) {
		
	$('.login_container .input_icon1 .mail').animate({height:'35px'}, 300);
	$('.login_container .input_icon1 .mail').keypress(function(e){
		return true
	});

	$(this).animate({bottom:'45px', fontSize: "14px"}, 300);

	$('.login_container .input_icon1 i').animate({left: '5'},300,function(){
		$('.login_container .input_icon1 i').animate({opacity: "1"});
	});
		
	$('.login_container .input_icon1 .mail').attr('placeholder' , 'Email');

  } else {
	$('.login_container .input_icon1 .mail').animate({height:'3px'}, 300);
	$('.login_container .input_icon1 .mail').keypress(function(e){
		e.preventDefault();
	});
	$(this).animate({bottom:'20px', fontSize: "20px"}, 300);
	$('.login_container .input_icon1 i').css('opacity', '0');
	$('.login_container .input_icon1 i').css('left', '-30px');

	$('.login_container .input_icon1 .mail').removeAttr('placeholder');
  }

  $('.login_container .input_icon1 .mail').toggleClass('toggle');
	
	
})


$('.login_container .pass label').click(function(){

  if($('.login_container .input_icon2 .pass_word').hasClass("toggle")) {
		
	$('.login_container .input_icon2 .pass_word').animate({height:'35px'}, 300);
	$('.login_container .input_icon2 .pass_word').keypress(function(e){
		return true
	});
	$(this).animate({bottom:'45px', fontSize: "14px"}, 300);

	$('.login_container .input_icon2 i').animate({left: '5'},300,function(){
		$('.login_container .input_icon2 i').animate({opacity: "1"});
	});
		
	$('.login_container .input_icon2 .pass_word').attr('placeholder' , 'Password');
  } else {
	
	$('.login_container .input_icon2 .pass_word').animate({height:'3px'}, 300);
	$('.login_container .input_icon2 .pass_word').keypress(function(e){
		e.preventDefault();
	});
	$(this).animate({bottom:'20px', fontSize: "20px"}, 300);
	$('.login_container .input_icon2 i').css('opacity', '0');
	$('.login_container .input_icon2 i').css('left', '-30px');

	$('.login_container .input_icon2 .pass_word').removeAttr('placeholder');

  }

  $('.login_container .input_icon2 .pass_word').toggleClass('toggle');
	
})



