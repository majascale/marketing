var connection = new Postmonger.Session();
var payload = {};
// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
       //document.getElementById( 'smsText' ).value = JSON.stringify( payload, null, 2 );
       document.getElementById( 'smsText' ).value = payload.arguments.execute.inArguments[0];
    }
});

// Save Sequence
connection.on('clickedNext', function() {
  var smsText = JSON.parse( document.getElementById( 'smsText' ).value );
  connection.trigger('updateActivity', smsText);
});
