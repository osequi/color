// Click on a slice on a wheel & pick it's color
var clickColorWheel = function(wheelID) {
  var wheel = document.querySelector(wheelID);
  var slices = wheel.querySelectorAll('.slice');

  for (i = 0; i < slices.length; i++) {
    slices[i].addEventListener('click', click, false);
  }

  function click() {
    var color = getComputedStyle(this).getPropertyValue("fill")
    document.body.style.backgroundColor = color;
  }
};


// Attach click to wheels
window.onload = function(e) {
  clickOnColorWheel('.color-wheel .wheel .svg');
}
