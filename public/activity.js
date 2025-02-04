var connection = new Postmonger.Session();

// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
  document.getElementById( 'smsText' ).value = JSON.stringify( data, null, 2 );
});

// Save Sequence
connection.on('clickedNext', function() {
  var smsText = JSON.parse( document.getElementById( 'smsText' ).value );
  connection.trigger('updateActivity', smsText);
});
