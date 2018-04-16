$(document).ready(function(){
	$("#jumbo-id").fadeIn(1000);

	//WHEN BUTTON IS CLICKED IN MAIN JUMBO, SCROLL TO ITEM.
	$('#call-button').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#contact-div").offset().top
    	}, 1000);
	});
	$('#judge-button').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#contact-div").offset().top
    	}, 1000);
	});
	$('#about-button').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#headItem").offset().top
    	}, 1000);
	});
	$('#education-button').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#education").offset().top
    	}, 1000);
	});
	$('#skill-button').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#programs-container").offset().top
    	}, 1000);
	});
	//END OF SCROLL FUNCTION

	//WHEN ENTERING MENU DIV, MENU IS SHOWN. WHEN LEAVING, MENU IS HIDDEN.
	$(window).scroll(function(){                          
            if ($(this).scrollTop() > 450) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
	$("#menu").mouseenter(function(){
		$(".sideMenu").toggle();

		$("#menu").mouseleave(function(){
			$(".sideMenu").hide();
		})
	})
	//END OF MENU FUNCTION

	//WHEN MENU BUTTON IS CLICKED, SCROLL TO SELECTED DIV
	$('#menuCall').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#contact-div").offset().top
    	}, 1000);
	});
	$('#menuJudge').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#contact-div").offset().top
    	}, 1000);
	});
	$('#menuAbout').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#headItem").offset().top
    	}, 1000);
	});
	$('#menuEdu').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#education").offset().top
    	}, 1000);
	});
	$('#menuSkill').on('click', function(){
		$('html, body').animate({
    		scrollTop: $("#programs-container").offset().top
    	}, 1000);
	});
	//END OF SCROLL FUNCTION 

	//PARALAX EFFECT
   	if ($(window).width() > 960) {
   		$("#programs-container, #jumbotron").css({"background-size": "140%"});
   		$(window).scroll(function() {
			var x = $(this).scrollTop();
			$("#programs-container, #jumbotron, #education").css('background-position', '0% ' + parseInt(+x / 12) + 'px');
		});
   	}else{
   		$("#programs-container, #jumbotron, #education").css({"background-size": "cover"});
   	}
	

})
