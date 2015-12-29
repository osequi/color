// Click on a slice on a wheel & pick it's color
var clickOnColorSlice = function(slicesID) {
  var slices = document.querySelectorAll(slicesID);

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
  clickOnColorSlice('.color-wheel .wheel .svg .slice');
}
