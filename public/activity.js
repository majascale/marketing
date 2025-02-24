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
    
    //document.getElementById('messageType').value = argsObj.type;
    switch(argsObj.type) {
       case 'sms':
            document.getElementById('viberSection').style.display='none'; 
            document.getElementById('messageType').value = argsObj.type;
            document.getElementById('smsMsisdn').value = argsObj.msisdn;
            document.getElementById('smsText').value = argsObj.text;
            break;
       case 'viber+text':
            document.getElementById('smsSection').style.display='none';
            document.getElementById('messageType').value = 'viber';
            document.getElementById('viberType').value = 'text';
            document.getElementById('viberTextMsisdn').value = argsObj.msisdn;
            document.getElementById('viberTextText').value = argsObj.text;
            document.getElementById('viberTextFallback').value = argsObj.fallbackText;
            document.getElementById('viberTextPlatform').value = argsObj.platform;
            document.getElementById('viberTextButtonName').value = argsObj.buttonName;
            document.getElementById('viberTextButtonUrl').value = argsObj.buttonUrl;
            document.getElementById('viberTextImageUrl').value = argsObj.imageUrl;
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
                    console.log('viberTextplatform is: ' + platform);
                    console.log('viberTextfallbackText is: ' + fallbackText);
                    console.log('viberTextbuttonUrl is: ' + buttonUrl);
                    console.log('viberTextbuttonName is: ' + buttonName);
                    console.log('viberTextimageUrl is: ' + imageUrl);
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
 /* payload['arguments'].execute.inArguments = [
            {
                //"imageUrl: imageUrl,
            }    
  ];  */
  if(type != null){
      payload['arguments'].execute.inArguments[0].type = type;
  }    
  if(msisdn != null){
      payload['arguments'].execute.inArguments[0].msisdn = msisdn;
  }  
  if(text != null){
      payload['arguments'].execute.inArguments[0].text = text;
  }    
  if(platform != null){
      payload['arguments'].execute.inArguments[0].platform = platform;
  } 
  if(buttonName != null){
      payload['arguments'].execute.inArguments[0].buttonName = buttonName;
  }  
  if(buttonUrl != null){
      payload['arguments'].execute.inArguments[0].buttonUrl = buttonUrl;
  }  
  if(imageUrl != null){
      payload['arguments'].execute.inArguments[0].imageUrl = imageUrl;
  }    
  payload['arguments'].execute.retryCount = 3; 
 
  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
  console.log('Update Done');  
      
});
