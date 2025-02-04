function isViberMessage() {
   var select = document.getElementById('messageType');
   var option = select.options[select.selectedIndex];
   document.getElementById('value').value = option.value;
   document.getElementById('text').value = option.text;
   console.log(option.value);
}
