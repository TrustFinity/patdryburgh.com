---
---

/*! echo-js v1.7.3 | (c) 2016 @toddmotto | https://github.com/toddmotto/echo */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var e,n,o,r,c,a={},u=function(){},d=function(t){return null===t.offsetParent},i=function(t,e){if(d(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},l=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){a.render(),n=null},o))};return a.init=function(n){n=n||{};var d=n.offset||0,i=n.offsetVertical||d,f=n.offsetHorizontal||d,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,i),b:s(n.offsetBottom,i),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,u=n.callback||u,a.render(),document.addEventListener?(t.addEventListener("scroll",l,!1),t.addEventListener("load",l,!1)):(t.attachEvent("onscroll",l),t.attachEvent("onload",l))},a.render=function(){for(var n,o,r=document.querySelectorAll("img[data-echo], [data-echo-background]"),d=r.length,l={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},f=0;d>f;f++)o=r[f],i(o,l)?(c&&o.setAttribute("data-echo-placeholder",o.src),null!==o.getAttribute("data-echo-background")?o.style.backgroundImage="url("+o.getAttribute("data-echo-background")+")":o.src=o.getAttribute("data-echo"),c||(o.removeAttribute("data-echo"),o.removeAttribute("data-echo-background")),u(o,"load")):c&&(n=o.getAttribute("data-echo-placeholder"))&&(null!==o.getAttribute("data-echo-background")?o.style.backgroundImage="url("+n+")":o.src=n,o.removeAttribute("data-echo-placeholder"),u(o,"unload"));d||a.detach()},a.detach=function(){document.removeEventListener?t.removeEventListener("scroll",l):t.detachEvent("onscroll",l),clearTimeout(n)},a});

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

  document.write('<link rel="stylesheet" href="' + theme + '?{{site.time | date: '%s%N'}}" type="text/css" id="js-theme">')

}

function renderAvailability() {
  var availabilityLabel = document.getElementById('data-availability-badge')
  if (this.isAvailable()) {
    availabilityLabel.innerHTML = 'available immediately for work'
    availabilityLabel.className = 'available'
  }
  if (this.isUnavailable()) {
    availabilityLabel.innerHTML = 'accepting project proposals for ' . this.month
    availabilityLabel.className = 'unavailable'
  }
}

Availability.custom({ user: '305caaaa-f027-466d-bc2e-66ccdde3c95a', render: renderAvailability })