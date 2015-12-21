var showSingleWheel = function(wheelsID) {
  var wheels = document.querySelectorAll(wheelsID);

  for (var i=0; i < wheels.length; i++) {
    wheels[i].addEventListener('click', clickOnWheel, false);
  }

  function clickOnWheel() {
    this.style.zIndex = 1000;
  }
}


var changeBackground = function(colorsID) {
  var colors = document.querySelectorAll(colorsID);

  for (var i=0; i < colors.length; i++) {
    colors[i].addEventListener('click', clickOnColor, false);
  }

  function clickOnColor() {
    var color = window.getComputedStyle(this, '::after').getPropertyValue('background-color');
    document.body.style.backgroundColor = color;
  }
}


//showSingleWheel('.color-wheel .color-circle');
changeBackground('.color-wheel .color');
