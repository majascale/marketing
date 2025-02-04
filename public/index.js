function isViberMessage() {
   if (document.getElementById("messageType").innerHTML == 'viber') {
      document.getElementById("viberType").hidden = true;
   }else{
      document.getElementById("viberType").hidden = false;
   }
}
