// hover photo underlays

var postLink = document.getElementsByClassName('js-project-link');

function showPhotoUnderlay(event) {
  var photo     = this.getAttribute('data-underlay');
      underlay  = document.getElementById(photo);
  
  underlay.style.opacity = '1';
}

function hidePhotoUnderlay() {
  underlay.style.opacity = '0';
}

for (var i = 0; i < postLink.length; i++) {
  postLink[i].addEventListener('mouseenter', showPhotoUnderlay);
  postLink[i].addEventListener('mouseleave', hidePhotoUnderlay);
}