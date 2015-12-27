var clickColorWheel = function(circleID) {
  var circle = document.querySelector(circleID);

  var slices = circle.querySelectorAll('.slice');
  console.log('length: ' + slices.length);

  for (i = 0; i < slices.length; i++) {
    slices[i].addEventListener('click', click, false);
  }

  function click() {
    console.log('c:' + getComputedStyle(this).getPropertyValue("fill"));
  }
};

window.onload = function(e) {
  console.log('loaded ...');
  clickColorWheel('.color-wheel__circle .svg');
}
