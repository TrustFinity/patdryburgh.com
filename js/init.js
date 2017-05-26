---
---

// lazy-load images
echo.init({
  offset: 1000,
  unload: true,
  debounce: false
})

// themes

var dayTheme      = '{{ "/css/main.css" | absolute_url }}'
    nightTheme    = '{{ "/css/night.css" | absolute_url }}'

function setDayTheme() {
  localStorage.setItem('theme', 'day')
}

function setNightTheme() {
  localStorage.setItem('theme', 'night')
}

function setThemeTime() {
  
  var currentTime = new Date().getHours()
  
  if ((0 <= currentTime&&currentTime < 8) || (19 <= currentTime&&currentTime <= 24)) {
    setNightTheme()
  }
  if (8 <= currentTime&&currentTime < 19) {
    setDayTheme()
  }

}

function checkTheme() {
  
  var timeTheme = localStorage.getItem('theme')
      userTheme = sessionStorage.getItem('theme')

  if (userTheme) {
    currentTheme = userTheme
  } else {
    currentTheme = timeTheme
  }

}

function setTheme() {

  setThemeTime()

  checkTheme()

  if (currentTheme == 'day') {
    theme = dayTheme
  }

  if (currentTheme == 'night') {
    theme = nightTheme
  }

  document.write('<link rel="stylesheet" href="' + theme + '" type="text/css" id="js-theme">')

}