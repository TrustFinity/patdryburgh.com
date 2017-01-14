// lazy-load images
echo.init({
  offset: 1000,
  unload: true,
  callback: function (element, op) {
    console.log(element, 'has been', op + 'ed')
  }
});