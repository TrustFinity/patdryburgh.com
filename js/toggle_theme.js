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

var body = document.getElementsByTagName('body')[0]

body.appendChild(themeButton)

themeButton.className = currentTheme
themeButton.addEventListener('click', toggleTheme)