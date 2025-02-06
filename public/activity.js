import hmacSHA512 from 'crypto-js/crypto-js';

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
  
  
  const crypto = require('crypto-js');
  const secretKey = '$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.';
  let hmac = crypto.createHmac('sha512', secretKey);
  let requestBody = 'Test';
  //let msg = 'GeeksforGeeks';
  //hmac.update(msg);
  //let hash = hmac.digest('hex');        
  //console.log(hash); 

 //var myString   = "blablabla Card game bla";
 //var myPassword = "myPassword";
 //var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
// var hmacTest = CryptoJS.HmacSHA512(requestBody, secretKey).toString();  
 //var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA512, secretKey);
 //hmac.update("Test");
 //var hash = hmac.finalize();   
 //console.log('Encrypt is: ' + encrypted); 
 //console.log('Hash is: ' + hash);    
 
//var hmacDigest = CryptoJS.HmacSHA512(requestBody, secretKey).toString(CryptoJS.digest);
 
     
    
});
