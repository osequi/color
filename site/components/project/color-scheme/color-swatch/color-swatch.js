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

  for (var i=0; i < colors.length; i++) {
    colors[i].addEventListener('click', click, false);
  }

  function click() {
    for (var i=0; i < colors.length; i++) {
      colors[i].classList.remove('color-swatch--active');
    }

    this.classList.add('color-swatch--active');
  }
}

colorSwatchChange('.color-scheme .color-swatch');
