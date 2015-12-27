var clickColorWheel = function(circleID) {
  var circle = document.querySelector(circleID);

  var slices = circle.querySelectorAll('.slice');

  for (i = 0; i < slices.length; i++) {
    slices[i].addEventListener('click', click, false);
  }

  function click() {
    var color = getComputedStyle(this).getPropertyValue("fill")
    console.log('c:' + color);
  }
};

window.onload = function(e) {
  clickColorWheel('.color-wheel__circle--1 .svg');
  clickColorWheel('.color-wheel__circle--2 .svg');
  clickColorWheel('.color-wheel__circle--3 .svg');
}
