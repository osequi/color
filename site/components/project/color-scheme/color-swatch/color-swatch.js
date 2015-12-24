var colorSwatchContrast = function(colorSwatchContrastsID) {
  var colorSwatchContrasts = document.querySelectorAll(colorSwatchContrastsID);

  for (var i=0; i < colorSwatchContrasts.length; i++) {
    calculateContrast(colorSwatchContrasts[i]);
  }

  function calculateContrast(item) {
    var style = window.getComputedStyle(item);
    var color = style.color;
    var background = style.backgroundColor;
    var contrast = chroma.contrast(color, background);
    var text = contrast.toFixed(2);

    if (contrast >= 4.51) {
      text += ' OK';
    }

    item.innerHTML = text;
  }
}


colorSwatchContrast('.color-swatch__contrast p');



var colorSwatchChange = function(colorsID) {
  var colors = document.querySelectorAll(colorsID);
  colors[0].classList.add('color-swatch--active');

  var names = document.querySelectorAll(colorsID + ' .color-swatch__name');
  var buttons = document.querySelectorAll(colorsID + ' .color-swatch__button');
  var inputs = document.querySelectorAll(colorsID + ' .color-swatch__value');

  for (var i=0; i < colors.length; i++) {
    names[i].addEventListener('click', clickOnColorName, false);
    buttons[i].addEventListener('click', clickOnButton, false);
    inputs[i].addEventListener('click', clickOnColorName, false);
  }

  function clickOnColorName() {
    for (var i=0; i < colors.length; i++) {
      colors[i].classList.remove('color-swatch--active');
    }

    this.parentNode.classList.add('color-swatch--active');
  }

  function clickOnButton() {
    var color = this.previousElementSibling.value;
    this.previousElementSibling.style.backgroundColor = color;

    if (this.parentNode.dataset.name == 'light') {
      document.body.style.backgroundColor = color;
    }
  }
}

colorSwatchChange('.color-scheme .color-swatch');
