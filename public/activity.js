var connection = new Postmonger.Session();
var payload = {};
// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
       //document.getElementById( 'smsText' ).value = JSON.stringify( payload, null, 2 );
       document.getElementById( 'smsText' ).value = JSON.stringify(payload.arguments.execute.inArguments, null, 2 );
       //var inArguments = JSON.stringify(payload.arguments.execute.inArguments, null, 2 );
        var hasInArguments = Boolean(
            payload['arguments'] &&
            payload['arguments'].execute &&
            payload['arguments'].execute.inArguments &&
            payload['arguments'].execute.inArguments.length > 0
        );
      var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};
        $.each(inArguments, function (index, inArgument) {
          $.each(inArgument, function (key, val) {
                if (key === 'text') {
                    //contactKey = val;
                    console.log("TextVal:" + val);
                    //document.getElementById( 'smsText' ).value = val;
                }            
            });
        }); 
      console.log("inArguments:" + inArguments);  
    }
});

// Save Sequence
connection.on('clickedNext', function() {
  var smsText = JSON.parse( document.getElementById( 'smsText' ).value );
  connection.trigger('updateActivity', smsText);
});
