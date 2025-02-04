function isViberMessage() {
   var select = document.getElementById('messageType');
   var option = select.options[select.selectedIndex];
   console.log(option.value);
}
