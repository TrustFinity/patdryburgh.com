var masthead = document.querySelector('masthead');
    post     = document.querySelector('post');

function coolScroll(e) {
  var y = window.pageYOffset;
  //     o = 1-(y/100);
  // masthead.style.opacity = o;
  // post.style.transform = 'translateY(' + -y + ')';
  console.log(y);
}

window.addEventListener('scroll', coolScroll());