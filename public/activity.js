var connection = new Postmonger.Session();
var payload = {};


connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    console.log('Payload Data: ' + JSON.stringify(payload,null,2));
    
    var args = JSON.stringify(payload['arguments'].execute.inArguments[0],null,2);
    var argsObj = JSON.parse(args);
    console.log('Args are: ' + args);
    
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
            if(!argsObj.sc_sms){ 
            }else{    
                document.getElementById('smsSC').value = argsObj.sc_sms;
            }   
            break;
       case 'viber+text':
            document.getElementById('smsSection').style.display='none';
            document.getElementById('viberFileSection').style.display='none';
            document.getElementById('viberVideoSection').style.display='none';
            document.getElementById('viberTextVideoSection').style.display='none';
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
            document.getElementById('viberVideoSection').style.display='none';
            document.getElementById('viberTextVideoSection').style.display='none';
            document.getElementById('messageType').value = 'viber';
            document.getElementById('viberType').value = 'file';
            if(!argsObj.msisdn){
            }else{
                document.getElementById('viberFileMsisdn').value = argsObj.msisdn;
            }
            if(!argsObj.fallbackText){
            }else{
                 document.getElementById('viberFileFallback').value = argsObj.fallbackText;
            }
            if(!argsObj.platform){
            }else{
                 document.getElementById('viberFilePlatform').value = argsObj.platform;
            }
            if(!argsObj.fileUrl){  
            }else{
                 document.getElementById('viberFileUrl').value = argsObj.fileUrl;
            } 
            if(!argsObj.fileName){  
            }else{
                 document.getElementById('viberFileName').value = argsObj.fileName;
            } 
            break;
         case 'viber+video': 
            document.getElementById('smsSection').style.display='none';
            document.getElementById('viberTextSection').style.display='none';
            document.getElementById('viberFileSection').style.display='none';
            document.getElementById('viberTextVideoSection').style.display='none';
            document.getElementById('messageType').value = 'viber';
            document.getElementById('viberType').value = 'video';
            if(!argsObj.msisdn){
            }else{
                 document.getElementById('viberVideoMsisdn').value = argsObj.msisdn;
            }
            if(!argsObj.fallbackText){
            }else{
                 document.getElementById('viberVideoFallback').value = argsObj.fallbackText;
            }
            if(!argsObj.platform){
            }else{
                 document.getElementById('viberVideoPlatform').value = argsObj.platform;
            }
            if(!argsObj.buttonName){
            }else{
                 document.getElementById('viberVideoButtonName').value = argsObj.buttonName;
            }
            if(!argsObj.buttonUrl){  
            }else{
                 document.getElementById('viberVideoButtonUrl').value = argsObj.buttonUrl;
            }
            if(!argsObj.videoUrl){
            }else{
                 document.getElementById('viberVideoUrl').value = argsObj.videoUrl;
            }
            if(!argsObj.videoSize){  
            }else{
                 document.getElementById('viberVideoSize').value = argsObj.videoSize;
            }
            if(!argsObj.videoDuration){
            }else{
                 document.getElementById('viberVideoDuration').value = argsObj.videoDuration;
            }
            if(!argsObj.thumbnailUrl){  
            }else{
                 document.getElementById('viberVideoThumbnailUrl').value = argsObj.thumbnailUrl;
            }
            break;
         case 'viber+text+video':
            document.getElementById('smsSection').style.display='none';
            document.getElementById('viberTextSection').style.display='none';
            document.getElementById('viberFileSection').style.display='none';
            document.getElementById('viberVideoSection').style.display='none';
            document.getElementById('messageType').value = 'viber';
            document.getElementById('viberType').value = 'text+video';
            if(!argsObj.msisdn){
            }else{
                 document.getElementById('viberTextVideoMsisdn').value = argsObj.msisdn;
            }
            if(!argsObj.text){  
            }else{
                  document.getElementById('viberTextVideoText').value = argsObj.text;
            }
            if(!argsObj.fallbackText){
            }else{
                  document.getElementById('viberTextVideoFallback').value = argsObj.fallbackText;
            }
            if(!argsObj.platform){
            }else{
                  document.getElementById('viberTextVideoPlatform').value = argsObj.platform;
             }
            if(!argsObj.buttonName){
            }else{
                  document.getElementById('viberTextVideoButtonName').value = argsObj.buttonName;
            }
            if(!argsObj.buttonUrl){  
            }else{
                  document.getElementById('viberTextVideoButtonUrl').value = argsObj.buttonUrl;
            }
            if(!argsObj.videoUrl){
            }else{
                  document.getElementById('viberTextVideoUrl').value = argsObj.videoUrl;
            }
            if(!argsObj.videoSize){  
            }else{
                  document.getElementById('viberTextVideoSize').value = argsObj.videoSize;
            }
            if(!argsObj.videoDuration){
            }else{
                  document.getElementById('viberTextVideoDuration').value = argsObj.videoDuration;
            }
            if(!argsObj.thumbnailUrl){  
            }else{
                  document.getElementById('viberTextVideoThumbnailUrl').value = argsObj.thumbnailUrl;
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
  var fileUrl;
  var fileName;
  var videoUrl;  
  var videoSize;
  var videoDuration;
  var thumbnailUrl; 
  var sc_sms; 
    
  switch(messageType) {
       case 'sms':
            type = messageType;
            sc_sms = document.getElementById('smsSC').value;
            msisdn = document.getElementById('smsMsisdn').value;  
            text = document.getElementById('smsText').value;
            console.log('smsSC is: ' + sc_sms);
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
                    msisdn = document.getElementById('viberFileMsisdn').value;
                    fallbackText = document.getElementById('viberFileFallback').value;
                    platform = document.getElementById('viberFilePlatform').value;
                    fileUrl = document.getElementById('viberFileUrl').value;
                    fileName = document.getElementById('viberFileName').value;
                    console.log('viberFileMsisdn is: ' + msisdn);
                    console.log('viberFileFallback is: ' + fallbackText);
                    console.log('viberFilePlatform is: ' + platform);
                    console.log('viberFileUrl is: ' + fileUrl);
                    console.log('viberFileName is: ' + fileName);
                break;
                case 'video':
                    msisdn = document.getElementById('viberVideoMsisdn').value;
                    fallbackText = document.getElementById('viberVideoFallback').value;
                    platform = document.getElementById('viberVideoPlatform').value;
                    buttonUrl = document.getElementById('viberVideoButtonUrl').value;
                    buttonName = document.getElementById('viberVideoButtonName').value;
                    videoUrl = document.getElementById('viberVideoUrl').value;
                    videoSize = document.getElementById('viberVideoSize').value;
                    videoDuration = document.getElementById('viberVideoDuration').value;
                    thumbnailUrl = document.getElementById('viberVideoThumbnailUrl').value;
                    console.log('viberVideoMsisdn is: ' + msisdn);
                    console.log('viberVideoFallback is: ' + fallbackText);
                    console.log('viberVideoPlatform is: ' + platform);
                    console.log('viberVideoButtonUrl is: ' + buttonUrl);
                    console.log('viberVideoButtonName is: ' + buttonName);
                    console.log('viberVideoUrl is: ' + videoUrl);
                    console.log('viberVideoSize is: ' + videoSize);
                    console.log('viberVideoDuration is: ' + videoDuration);
                    console.log('viberVideoThumbnailUrl is: ' + thumbnailUrl);
                break;
                case 'text+video':
                    msisdn = document.getElementById('viberTextVideoMsisdn').value;
                    text = document.getElementById('viberTextVideoText').value;
                    fallbackText = document.getElementById('viberTextVideoFallback').value;
                    platform = document.getElementById('viberTextVideoPlatform').value;
                    buttonUrl = document.getElementById('viberTextVideoButtonUrl').value;
                    buttonName = document.getElementById('viberTextVideoButtonName').value;
                    videoUrl = document.getElementById('viberTextVideoUrl').value;
                    videoSize = document.getElementById('viberTextVideoSize').value;
                    videoDuration = document.getElementById('viberTextVideoDuration').value;
                    thumbnailUrl = document.getElementById('viberTextVideoThumbnailUrl').value;
                    console.log('viberTextVideoMsisdn is: ' + msisdn);
                    console.log('viberTextVideoText is: ' + text);
                    console.log('viberTextVideoFallback is: ' + fallbackText);
                    console.log('viberTextVideoPlatform is: ' + platform);
                    console.log('viberTextVideoButtonUrl is: ' + buttonUrl);
                    console.log('viberTextVideoButtonName is: ' + buttonName);
                    console.log('viberTextVideoUrl is: ' + videoUrl);
                    console.log('viberTextVideoSize is: ' + videoSize);
                    console.log('viberTextVideoDuration is: ' + videoDuration);
                    console.log('viberTextVideoThumbnailUrl is: ' + thumbnailUrl);
                break;
            }
       break;
  }  

  //console.log('Type is: ' + type);   
  var jsonObj = JSON.stringify(payload,null,2);
  console.log('Payload-Before: ' + jsonObj);
    
  payload['metaData'].isConfigured = true;  
  payload['arguments'].execute.inArguments[0].type = type;

  if(!sc_sms){
      payload['arguments'].execute.inArguments[0].sc_sms = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].sc_sms = sc_sms;
  } 
    
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

  if(!fileUrl){
      payload['arguments'].execute.inArguments[0].fileUrl = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].fileUrl = fileUrl;
  }  

  if(!fileName){
      payload['arguments'].execute.inArguments[0].fileName = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].fileName = fileName;
  }    

  if(!videoUrl){
      payload['arguments'].execute.inArguments[0].videoUrl = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].videoUrl = videoUrl;
  }

  if(!videoSize){
      payload['arguments'].execute.inArguments[0].videoSize = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].videoSize = videoSize;
  }

  if(!videoDuration){
      payload['arguments'].execute.inArguments[0].videoDuration = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].videoDuration = videoDuration;
  }

  if(!thumbnailUrl){
      payload['arguments'].execute.inArguments[0].thumbnailUrl = undefined;
  }else{
      payload['arguments'].execute.inArguments[0].thumbnailUrl = thumbnailUrl;
  }  

  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
  console.log('Update Done');  
      
});
