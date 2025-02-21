var connection = new Postmonger.Session();
var payload = {};


connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    console.log('Payload Data: ' + JSON.stringify(payload,null,2));
    console.log('Payload Type: ' + JSON.stringify(payload['arguments'].execute.inArguments[0].type,null,2));
    
    var args = JSON.stringify(payload['arguments'].execute.inArguments[0],null,2);
    var argsObj = JSON.parse(args);
    console.log('Args: ' + args);
    
    document.getElementById('messageType').value = argsObj.type;
    switch(argsObj.type) {
       case 'sms':
            document.getElementById('viberSection').style.display='none';  
            document.getElementById('smsMsisdn').value = argsObj.msisdn;
            document.getElementById('smsText').value = argsObj.text;
            break;
       case 'viber':
            document.getElementById('smsSection').style.display='none';
            switch(argsObj.viberType) {
               case 'text':
                    //document.getElementById('viberSection').style.display='none';  
                    document.getElementById('viberTextMsisdn').value = argsObj.msisdn;
                    document.getElementById('viberTextText').value = argsObj.text;
                    document.getElementById('viberTextFallback').value = argsObj.fallbackText;
                    document.getElementById('viberTextPlatform').value = argsObj.platform;
                    document.getElementById('viberTextButtonName').value = argsObj.buttonName;
                    document.getElementById('viberTextButtonUrl').value = argsObj.buttonUrl;
                    document.getElementById('viberTextImageUrl').value = argsObj.imageUrl;
               break;
               case 'file':
                    document.getElementById('viberTextSection').style.display='none';
               break;
               case 'video':
                    document.getElementById('viberTextSection').style.display='none';
               break;
               case 'text+video':
                    document.getElementById('viberTextSection').style.display='none';
               break;
            }
       break;
    }
    
    
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
                "type": messageType,
                "msisdn": smsMsisdn,
                "text": smsText,
            }  
  ];  
  payload['arguments'].execute.retryCount = 3; 
 
  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
  console.log('Update Done');  
      
});
