// dollar field

var dollarField = document.getElementsByClassName('js-dollar-field');

function dollarifyField(value) {
  var value   = dollarify(this.value);
  this.value = value;
}

for (var i = 0; i < dollarField.length; i++) {
  dollarField[i].addEventListener('onkeyup', dollarifyField);
  dollarField[i].addEventListener('onload', dollarifyField);
}