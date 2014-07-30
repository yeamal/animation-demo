

function interval() {
  $('.box').effect('shake', { times:3 }, 100);
}
$(document).ready(function() {  
  var shake = setInterval(interval, 5000);    
});

// $(document).ready(function(){	

	
// ///////////PART TWO////////////////

// 	//$( ".box" ).addClass( "red", 1000);
// 		//removeClass also works here
// 	$( ".box" ).effect("shake", 
// 			{times:10}, 1000);
// 		//Try also blind, bounce, clip, drop, fade, fold, highlight, puff, pulsate, scale, shake, size, slide, or transfer
// 		//Effects can also be used in conjunction with the "hide", "show", "toggle", or "toggleClass" commands. --> .hide("puff",1000); 


// // $( ".box" ).effect("shake", 
// // 			{times:10}, 1000);

// //end doc ready
// });
