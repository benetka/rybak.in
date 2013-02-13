/*
Author: Jan Rybak
Twitter: @jendarybak
Author URL: http://www.rybak.in
*/

$(document).ready(function(){

	/*
	 * Background image rotation
	 */
	var rand = Math.floor(Math.random()*14);
	var bgUrl = "url(./images/slide1/jan-rybak-bg" + rand +".jpg)";
	$("#introBg").css("background-image", bgUrl);

	/*
	 * Intro fading
	 */
	// intro fading effect - text
	$("#intro").css("opacity", "0");
	$("#intro").animate(
		{opacity:1}, 
		{duration: 3000}, 
		{easing: 'Swing'}
	);

	// intro fading effect - background
	$("#introBg").css("opacity", "0");
	$("#introBg").animate(
		{opacity:1}, 
		{duration: 7000}, 
		{easing: 'Swing'}
	);
	
	// fading menu background
	$('nav').hover(function() { 
		$('#nav-bg').stop().animate({"opacity": 0.4 });
	},function() { 
		$('#nav-bg').stop().animate({"opacity": 0});
	});	
	
	/*
	 * Sliding to another slide
	 */
	$.localScroll ( {
		duration: 800, 
		easing: "easeInSine",
		hash: true 
	});

	/*
	 * Skills image handling
	 */

	/* flag: skills image zoomed (true/false) */
	var up = false;

	/* original size of skills image */
	var imgWidth = $('#skills').width();
	var imgHeight = $('#skills').height();

	/* updated size of image skills */
	var newWidth = imgWidth;
	var newHeight = imgHeight;

	if ($(window).width() < imgWidth) {
		newWidth = Math.floor($(window).width()/1.2);
		newHeight = imgHeight/(imgWidth/newWidth);
	}
	
	$('#skills').click(function() { 
		if (up == false) {
			up = true;
	
			$(this).stop().animate({
				easing: 'Swing',
		    	top: '-=200',
				width: newWidth,
				height: newHeight				
		  	}, 1500);

			$("#aboutMe p").animate(
				{opacity: 0.2},
				{duration: 800},
				{easing: 'Swing'}
			);
			
		} else {
			up = false;
	
			$(this).stop().animate({
				width: imgWidth,
				height: imgHeight,
		    	top: '+=200'
		  	}, 300);			
		
			$("#aboutMe p").animate(
				{opacity: 1}, 
				{duration: 1300}, 
				{easing: 'Swing'}
			);		
		}
	});
	
	$(window).scroll(function () {
		if(up == true) {
			up = false;
						
			$('#skills').stop().animate({
		    	top: '+=200',
		  	}, 300);			
		
			$("#aboutMe p").animate(
				{opacity: 1}, 
				{duration: 1300}, 
				{easing: 'Swing'}
			);
		}
	});
	
	/*
	 * Parallax effect
	 */	
	// .parallax(xPosition, speedFactor, outerHeight) options:
	// xPosition - Horizontal position of the element
	// inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	// outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

	$('#introBg').parallax("50%", 0.2, null, true);
	$('#aboutMe article').parallax("50%", 0.8, null, false);
	$('#skills').parallax("50%", 1.3, null, false);

})