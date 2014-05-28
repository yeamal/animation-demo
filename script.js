

$(document).ready(function(){	

	$("#animate-button" ).click(startAnimation);

	function startAnimation(){
		$(".box").animate({
    		opacity: 0.5,
    		//backgroundColor:"red",
    		left: "+=500",
    		height: "toggle",
  		}, 5000, 
  		function() {
    			console.log("animation complete");
  		});
	}
	
///////////PART TWO////////////////

	//$( ".box" ).addClass( "red", 1000);
		//removeClass also works here
	//$( ".box" ).effect("explode", 1000);
		//Try also blind, bounce, clip, drop, fade, fold, highlight, puff, pulsate, scale, shake, size, slide, or transfer
		//Effects can also be used in conjunction with the "hide", "show", "toggle", or "toggleClass" commands. --> .hide("puff",1000); 




//end doc ready
});
