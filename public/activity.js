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
  var type;
  var text;   
  var msisdn;
  var platform;
  var fallbackText;  
  var buttonUrl; 
  var buttonName;
  var imageUrl;

  switch(messageType) {
       case 'sms':
            type = messageType;
            msisdn = document.getElementById( 'smsMsisdn' ).value;  
            text = document.getElementById( 'smsText' ).value;
            console.log('smsMsisdn is: ' + msisdn);
            console.log('smsText is: ' + text);
            break;
       case 'viber':
            var viberType = document.getElementById( 'viberType' ).value;
            type = messageType + '+' + viberType; 
            switch(viberType) {
                case 'text':
                    msisdn = document.getElementById('viberTextMsisdn').value;
                    text = document.getElementById('viberTextText').value;
                    platform = document.getElementById('viberTextPlatform').value;
                    fallbackText = document.getElementById('viberTextFallback').value;
                    buttonUrl = document.getElementById('viberTextButtonUrl').value;
                    buttonName = document.getElementById('viberTextButtonName').value;
                    imageUrl =  document.getElementById('viberTextImageUrl').value;
                    console.log('viberTextMsisdn is: ' + msisdn);
                    console.log('viberTextText is: ' + text);
                    console.log('platform is: ' + platform);
                    console.log('fallbackText is: ' + fallbackText);
                    console.log('buttonUrl is: ' + buttonUrl);
                    console.log('buttonName is: ' + buttonName);
                    console.log('imageUrl is: ' + imageUrl);
                break;
                case 'file':
                   
                break;
                case 'video':
                    
                break;
                case 'text+video':
                   
                break;
            }
       break;
  }  

  console.log('Type is: ' + type);   
  var jsonObj = JSON.stringify(payload,null,2);
  console.log('Payload-Before: ' + jsonObj);  
  payload['metaData'].isConfigured = true;  
  payload['arguments'].execute.inArguments = [
            {
                "type": type,
                "msisdn": msisdn,
                "text": text,
            }  
  ];  
  payload['arguments'].execute.retryCount = 3; 
 
  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
  console.log('Update Done');  
      
});
