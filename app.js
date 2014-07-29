$(document).ready(function() {
	$("#thex").click(function() {
  		if ( $( ".thingtohide:first" ).is( ":hidden" ) ) {
    		$( ".thingtohide" ).show();
  } 	else {
    		$( ".thingtohide" ).hide();
  }
  		
});
});