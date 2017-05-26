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

toggleButton  = document.getElementById('js-theme-toggle')
toggleButton.className = currentTheme

toggleButton.addEventListener('click', toggleTheme)