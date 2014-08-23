$(document).ready(function() {
	$("#thex").click(function() {
		$( "#thex" ).toggleClass( "rotate" );
		$( ".controls.other" ).toggleClass( "show" );
		$( ".controlsections" ).toggleClass( "longer" );

	});
	$("#home").click(function() {
  		if ( $( ".thingtohide:first" ).is( ":hidden" ) ) {
    		$( ".thingtohide" ).fadeIn(200);
 	 	} 
 	 	else {
    		$( ".thingtohide" ).fadeOut(200);
 	 	}	
  });
	
});