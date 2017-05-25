---
---

// lazy-load images
echo.init({
  offset: 1000,
  unload: true,
  debounce: false
});

function setNightTheme() {
  document.write("<link rel='stylesheet' href='{{ "/css/night.css" | absolute_url }}' type='text/css'>");
  localStorage.setItem('theme', 'night');
}

function setDayTheme() {
  document.write("<link rel='stylesheet' href='{{ "/css/main.css" | absolute_url }}' type='text/css'>");
  localStorage.setItem('theme', 'day');
}

function setTheme() {
  
  var currentTime = new Date().getHours();
  
  if (0 <= currentTime&&currentTime < 8) {
    setNightTheme();
  }
  if (8 <= currentTime&&currentTime < 20) {
    setDayTheme();
  }
  if (20 <= currentTime&&currentTime <= 24) {
    setNightTheme();
  }

}