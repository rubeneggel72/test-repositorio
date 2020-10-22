$( function() {
    $( ".col s6 offset-s1" ).on( "click", function() {
      $( ".col s6 offset-s1" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( ".col s6 offset-s1" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );