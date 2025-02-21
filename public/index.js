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
function setViberSectionVisibility(){
       var select = document.getElementById('viberType');
       var value = select.options[select.selectedIndex].value;
       console.log(value);
       switch(value) {
       case 'text':
           document.getElementById('viberTextSection').hidden = false;
           
           break;
       case 'file':
           document.getElementById('viberTextSection').hidden = true;
           
           break;
       case 'video':
           document.getElementById('viberTextSection').hidden = true;
           
           break; 
       case 'text+video':
           document.getElementById('viberTextSection').hidden = true;
           
           break;      
       default:
           document.getElementById('viberTextSection').hidden = true;             
       }
}

