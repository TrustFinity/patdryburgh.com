// javascript detection

var body = document.getElementsByTagName('body')

body[0].className = 'js-ready'

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

var menu = document.getElementById('js-menu')


menu.appendChild(themeButton)

themeButton.className = currentTheme
themeButton.addEventListener('click', toggleTheme)

// search form

var showSearch  = false
    searchForm  = document.getElementById('search')
    searchInput = document.getElementById('search__input')

function toggleSearch() {
  showSearch = !showSearch
  updateSearchFormState()
  return showSearch
}

function updateSearchFormState() {
  searchButton.className = !showSearch && 'search-toggle--default'
  searchForm.className = showSearch ? 'show' : 'hide'
  if (showSearch) { 
    searchInput.focus();
  }
}

menu.appendChild(searchButton)
updateSearchFormState()

searchButton.addEventListener('click', toggleSearch)

document.onkeydown = function(e) {
  e = e || window.event;
  if (e.keyCode == 27) {
    toggleSearch()
  }
};

// availability label

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