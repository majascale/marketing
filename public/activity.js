var connection = new Postmonger.Session();
var payload = {};
// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
  //document.getElementById( 'smsText' ).value = JSON.stringify( data, null, 2 );
  if (data) {
      payload = data;
  }
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
                    document.getElementById( 'smsText' ).value = val;
                }            
            });
        });
        console.log(payload);
});

// Save Sequence
connection.on('clickedNext', function() {
  var smsText = JSON.parse( document.getElementById( 'smsText' ).value );
  connection.trigger('updateActivity', smsText);
});
