var connection = new Postmonger.Session();
var payload = {};


connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    console.log('Payload Data: ' + JSON.stringify(payload,null,2));
    console.log('Payload Type: ' + JSON.stringify(payload['arguments'].execute.inArguments[0].type,null,2));
    
    //const json = JSON.stringify(payload.arguments.execute.inArguments[1], null, 2 );
    //const obj = JSON.parse(json);
    //document.getElementById( 'messageType' ).value = obj.messageType;
    //document.getElementById( 'smsText' ).value = obj.text;
    //document.getElementById( 'smsMsisdn' ).value = obj.msisdn;
    
});


connection.on('clickedNext', function() {
  //messageType
  var smsText = document.getElementById( 'smsText' ).value;
  console.log('smsText is: ' + smsText);
  var smsMsisdn = document.getElementById( 'smsMsisdn' ).value;  
  console.log('smsMsisdn is: ' + smsMsisdn);
    
  var jsonObj = JSON.stringify(payload,null,2);
  console.log('Payload-Before: ' + jsonObj);  
  payload['metaData'].isConfigured = true;  
  payload['arguments'].execute.inArguments = [
            {
                "type": "sms",
                "msisdn": smsMsisdn,
                "text": smsText,
            }  
  ];  
  payload['arguments'].execute.retryCount = 3; 
 
  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
  console.log('Update Done');  
      
});
