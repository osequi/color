var colorSwatch = function(colorsID) {
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

    if (this.parentNode.dataset.name == 'background') {
      document.body.style.backgroundColor = color;
    }
  }
}



colorSwatch('.color-scheme .color-swatch');
