import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

var connection = new Postmonger.Session();
var payload = {};

// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
    if (data) {
       payload = data;
    }
    const json = JSON.stringify(payload.arguments.execute.inArguments[1], null, 2 );
    const obj = JSON.parse(json);
    document.getElementById( 'smsText' ).value = obj.text;
});

// Save Sequence
connection.on('clickedNext', function() {

  var sms = document.getElementById( 'smsText' ).value;
  console.log('SMS: ' + sms);
  var jsonObj = JSON.stringify(payload,null,2);
  console.log('jsonObj-Before: ' + jsonObj);  
  payload.arguments.execute.inArguments[1].text = sms; 
  console.log('Payload-After: ' + JSON.stringify(payload,null,2));  
  connection.trigger('updateActivity', payload);
  
  
  //const crypto = require('crypto-js');
  //const secret = '$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.';
  //let hmac = crypto.createHmac('sha512', secret);
  //let msg = ' "msisdn": "38977772032", "sc": "1990", "text": "Test message!","service_id": "2724" ';
  //let msg = 'GeeksforGeeks';
  //hmac.update(msg);
  //let hash = hmac.digest('hex');        
  //console.log(hash); 
  console.log('end');  
    
});
