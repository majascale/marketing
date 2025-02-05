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
  
  //generate the signature part and update Conf ... in Testing
  const crypto = require('crypto');
  // Defining key
  const secret = '$2y$10$DHkc4KUis70s57hQvBPrfOBlbj.tonKXniTjUBpArymaVqOXxgcn.';
  const hash = crypto.createHmac('sha512', secret)
                    .update('{
    "msisdn": "38977772032",
    "sc": "1990",
    "text": "Test message!",
    "service_id": "2724"
    }')  // updating data
                    .digest('hex');           // Encoding to be used


console.log(hash); 
});
