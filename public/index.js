function setSectionVisibility() {
       var select = document.getElementById('messageType');
       var value = select.options[select.selectedIndex].value;
       console.log(value);
       switch(value) {
       case 'sms':
           document.getElementById('smsSection').hidden = false;
           document.getElementById('viberSection').hidden = true;
           break;
       case 'viber':
           document.getElementById('smsSection').hidden = true;
           document.getElementById('viberSection').hidden = false;
           break;
       default:
           document.getElementById('smsSection').hidden = true;
           document.getElementById('viberSection').hidden = true;
       }
}
