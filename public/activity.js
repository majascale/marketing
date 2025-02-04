var connection = new Postmonger.Session();
var payload = {};
// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    document.getElementById( 'smsText' ).value = JSON.stringify(payload.arguments.execute.inArguments[1].val, null, 2 );
});

// Save Sequence
connection.on('clickedNext', function() {
  var smsText = JSON.parse( document.getElementById( 'smsText' ).value );
  connection.trigger('updateActivity', smsText);
});
