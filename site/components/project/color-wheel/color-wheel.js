
var changeColorForPalette = function(colorsID, swatchesID) {
  var colors = document.querySelectorAll(colorsID);

  for (var i=0; i < colors.length; i++) {
    colors[i].addEventListener('click', clickOnColor, false);
  }

  function clickOnColor() {
    var color = window.getComputedStyle(this, '::after').getPropertyValue('background-color');
    var swatches = document.querySelectorAll(swatchesID);

    for (var i=0; i < swatches.length; i++) {
      if (swatches[i].classList.contains('color-swatch--active')) {
        swatches[i].querySelector('.color-swatch__value').value = color;
        swatches[i].querySelector('.color-swatch__value').style.backgroundColor = color;
        swatches[i].querySelector('.color-swatch__button').classList.add('color-swatch__button--active');

        if (swatches[i].dataset.name == 'background') {
          document.body.style.backgroundColor = color;
        }
      }
    }
  }
}


changeColorForPalette('.color-wheel .color', '.color-scheme .color-swatch');
