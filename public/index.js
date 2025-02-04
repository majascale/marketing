function isViberMessage() {
   var select = document.getElementById('messageType');
   var value = select.options[select.selectedIndex].value;
   console.log(value);
}
