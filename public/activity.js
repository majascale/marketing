var connection = new Postmonger.Session();
var payload = {};


connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    console.log('Payload Data: ' + JSON.stringify(payload,null,2));
    console.log('Payload Type: ' + JSON.stringify(payload['arguments'].execute.inArguments[0].type,null,2));
    
    //var json = JSON.stringify(payload.arguments.execute.inArguments[1], null, 2 );
    //var obj = JSON.parse(json);

    var args = JSON.stringify(payload['arguments'].execute.inArguments[0],null,2);
    var argsObj = JSON.parse(args);
    console.log('Args: ' + args);
    console.log('Args Obj Type: ' + argsObj.type);
    document.getElementById('messageType').value = argsObj.type;
    //if type= sms show the sms section
    document.getElementById('smsMsisdn').value = argsObj.msisdn;
    document.getElementById('smsText').value = argsObj.text;
    //if type = viber show viber message type selection
    
});


connection.on('clickedNext', function() {
  var messageType = document.getElementById( 'messageType' ).value;
  console.log('messageType is: ' + messageType);  
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
