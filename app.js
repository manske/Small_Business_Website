$(document).ready(function() {
	$("#thex").click(function() {
		$( "#thex" ).toggleClass( "rotate" );
		$( "#home" ).toggleClass( "show" )

	});
	$("#home").click(function() {
  		if ( $( ".thingtohide:first" ).is( ":hidden" ) ) {
    		$( ".thingtohide" ).show();
 	 	} 
 	 	else {
    		$( ".thingtohide" ).hide();
 	 	}	
  });
});