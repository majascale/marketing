
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
  const secretKey = '$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.';
  //let hmac = crypto.createHmac('sha512', secret);
  let requestBody = 'Test 1';
  //let msg = 'GeeksforGeeks';
  //hmac.update(msg);
  //let hash = hmac.digest('hex');        
  //console.log(hash); 

 var myString   = "blablabla Card game bla";
 var myPassword = "myPassword";
 var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
 console.log('Encrypt is: ' + encrypted);  
 
var hmacDigest = CryptoJS.HmacSHA512(requestBody, secretKey).toString(CryptoJS.digest);
 console.log('HmacDigest is: ' + hmacDigest);     
    
});
