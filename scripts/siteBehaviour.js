/*
Author: Jan Rybak
Twitter: @jendarybak
Author URL: http://www.rybak.in
*/

$(document).ready(function(){
	
	// sliding to another slide
	$.localScroll ( {
		duration: 800, 
		easing: "easeInSine",
		hash: true 
	});

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
	
	// .parallax(xPosition, speedFactor, outerHeight) options:
	// xPosition - Horizontal position of the element
	// inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	// outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#introBg').parallax("50%", 0.2, null, true);
	$('#aboutMe .textbox').parallax("50%", 0.8, null, false);	

})