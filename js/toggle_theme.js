var clickEventType = ('ontouchstart' in window ? 'touchend' : 'click');

toggleButton  = document.getElementById('js-theme-toggle');

toggleButton.className = currentTheme;

toggleButton.addEventListener('click', toggleTheme);

toggleButton.addEventListener('touchstart', function(e) {
  e.preventDefault();
  // trigger the actual behavior we bound to the 'click' event
  e.target.click();
});