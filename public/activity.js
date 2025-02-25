var connection = new Postmonger.Session();
var payload = {};


connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    console.log('Payload Data: ' + JSON.stringify(payload,null,2));
    //console.log('Payload Type: ' + JSON.stringify(payload['arguments'].execute.inArguments[0],null,2));
    
    var args = JSON.stringify(payload['arguments'].execute.inArguments[0],null,2);
    var argsObj = JSON.parse(args);
    console.log('Args: ' + args);
    
    switch(argsObj.type) {
       case 'sms':
            document.getElementById('viberSection').style.display='none'; 
            document.getElementById('messageType').value = argsObj.type;
            if(!argsObj.msisdn){
            }else{
                document.getElementById('smsMsisdn').value = argsObj.msisdn;
            }
            if(!argsObj.text){ 
            }else{    
                document.getElementById('smsText').value = argsObj.text;
            }    
            break;
       case 'viber+text':
            document.getElementById('smsSection').style.display='none';
            document.getElementById('viberFileSection').style.display='none';
            document.getElementById('messageType').value = 'viber';
            document.getElementById('viberType').value = 'text';
            if(!argsObj.msisdn){
            }else{
                document.getElementById('viberTextMsisdn').value = argsObj.msisdn;
            }
            if(!argsObj.text){  
            }else{
                document.getElementById('viberTextText').value = argsObj.text;
            }
            if(!argsObj.fallbackText){
            }else{
                 document.getElementById('viberTextFallback').value = argsObj.fallbackText;
            }
            if(!argsObj.platform){
            }else{
                 document.getElementById('viberTextPlatform').value = argsObj.platform;
            }
            if(!argsObj.buttonName){
            }else{
                 document.getElementById('viberTextButtonName').value = argsObj.buttonName;
            }
            if(!argsObj.buttonUrl){  
            }else{
                 document.getElementById('viberTextButtonUrl').value = argsObj.buttonUrl;
            }
            if(!argsObj.imageUrl){  
            }else{
                 document.getElementById('viberTextImageUrl').value = argsObj.imageUrl;
            }
            break;
       case 'viber+file': 
            document.getElementById('smsSection').style.display='none';
            document.getElementById('viberTextSection').style.display='none';
            document.getElementById('messageType').value = 'viber';
            document.getElementById('viberType').value = 'file';
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
            msisdn = document.getElementById('smsMsisdn').value;  
            text = document.getElementById('smsText').value;
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
  payload['arguments'].execute.inArguments[0].type = type;
     
  if(!msisdn){
      payload['arguments'].execute.inArguments[0].msisdn = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].msisdn = msisdn;
  }  
    
  if(!text){
      payload['arguments'].execute.inArguments[0].text = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].text = text;
  }   
    
  if(!platform){
      payload['arguments'].execute.inArguments[0].platform = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].platform = platform;
  } 
    
  if(!fallbackText){
      payload['arguments'].execute.inArguments[0].fallbackText = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].fallbackText = fallbackText;
  }   
    
  if(!buttonName){
      payload['arguments'].execute.inArguments[0].buttonName = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].buttonName = buttonName;
  } 
    
  if(!buttonUrl){
      payload['arguments'].execute.inArguments[0].buttonUrl = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].buttonUrl = buttonUrl;
  } 
    
  if(!imageUrl){
      payload['arguments'].execute.inArguments[0].imageUrl = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].imageUrl = imageUrl;
  }    
 
 
  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
  console.log('Update Done');  
      
});
