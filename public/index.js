function setSectionVisibility() {
       var select = document.getElementById('messageType');
       var value = select.options[select.selectedIndex].value;
       console.log(value);
       switch(value) {
       case 'sms':
            document.getElementById('smsSection').style.display='block';           
            document.getElementById('viberSection').style.display='none'; 
            break;
       case 'viber':
            document.getElementById('smsSection').style.display='none'; 
            document.getElementById('viberSection').style.display='block'; 
            break;
       default:
            document.getElementById('smsSection').style.display='none'; 
            document.getElementById('viberSection').style.display='none'; 
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

