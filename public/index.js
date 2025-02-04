function setViberSectionVisibility() {
       var select = document.getElementById('messageType');
       var value = select.options[select.selectedIndex].value;
       console.log(value);
       if(value === 'viber'){
         document.getElementById('viberSection').hidden = false;
       }else{
         document.getElementById('viberSection').hidden = true;
       }
}
