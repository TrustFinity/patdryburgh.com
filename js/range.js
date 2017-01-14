// contact form value

var range   = document.getElementsByClassName('js-range');

function showRangeValue() {
  var value   = this.value;
      display = document.getElementById(this.getAttribute('data-display'));
  
  if (value == "50000") {
    displayValue = dollarify(value) + "+";
  } else {
    displayValue = dollarify(value);
  }
  
  display.innerHTML = displayValue;
}

for (var i = 0; i < range.length; i++) {
  range[i].addEventListener('input', showRangeValue);
  range[i].addEventListener('onload', showRangeValue);
}