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
});

// Save Sequence
connection.on('clickedNext', function() {
  //to be checked here Unexpected token 'H', "Hardcoded text1" is not valid JSON var sms = JSON.parse( document.getElementById( 'smsText' ).value );
  var sms = document.getElementById( 'smsText' ).value;
  console.log('SMS: ' + sms);
  //console.log('Payload: ' + JSON.stringify(payload,null,2));
  var jsonObj = JSON.stringify(payload,null,2);
  console.log('jsonObj-Before: ' + jsonObj);  
  payload.arguments.execute.inArguments[1].text = sms; 
  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
});
