// theme toggle

function toggleTheme(e) {
  
  checkTheme()

  if (currentTheme == 'day') {
    document.getElementById('js-theme').href=nightTheme
    e.target.className = 'night'
    sessionStorage.setItem('theme', 'night')
  }

  if (currentTheme == 'night') {
    document.getElementById('js-theme').href=dayTheme
    e.target.className = 'day'
    sessionStorage.setItem('theme', 'day')
  }

}

var body = document.getElementById('js-menu')

body.appendChild(themeButton)

themeButton.className = currentTheme
themeButton.addEventListener('click', toggleTheme)

// Availability label

var availabilityLabel = document.getElementById('data-availability-badge')

function renderAvailability() {
  if (availabilityLabel) {
    availabilityLabel.innerHTML = 'I am currently booking projects for ' + this.month() + '.';
    availabilityLabel.className = 'available'
  }
}

if (availabilityLabel) {
  Availability.custom({ 
    user: '305caaaa-f027-466d-bc2e-66ccdde3c95a', 
    render: renderAvailability 
  })
}