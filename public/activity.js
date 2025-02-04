var connection = new Postmonger.Session();
var payload = {};
// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    //document.getElementById( 'smsText' ).value = JSON.stringify(payload.arguments.execute.inArguments[1], null, 2 );
    const json = JSON.stringify(payload.arguments.execute.inArguments[1], null, 2 );
    const obj = JSON.parse(json);
    document.getElementById( 'smsText' ).value = obj.text;


   /* var smsText;
    var hasInArguments = Boolean(
      payload["arguments"] &&
        payload["arguments"].execute &&
        payload["arguments"].execute.inArguments &&
        payload["arguments"].execute.inArguments.length > 0
    );

    var inArguments = hasInArguments ? payload["arguments"].execute.inArguments: {}; 

    $.each(inArguments, function (index, inArgument) {
      $.each(inArgument, function (key, val) {
        if (key === "text") {
          smsText = val;
        }
      });
    });
    //$("#smsText").html(smsText);
    document.getElementById( 'smsText' ).value = smsText;*/
});

// Save Sequence
connection.on('clickedNext', function() {
  var sms = JSON.parse( document.getElementById( 'smsText' ).value );
  console.log('SMS: " + sms);
  connection.trigger('updateActivity', sms);
});
