// Change color wheel colors by applying a color function
// - tunerType: tint, shade, tone, ...
// - tunerValue: 0-100%
// - colorValue: #xxyyxx
//
//
var changeColorWheelColors = function(tunerValue, colorValue) {
  var colors = document.querySelectorAll('.color-wheel .colors .color');

  var rules = '';

  for (i = 0; i < colors.length; i++) {
    changeColor(colors[i], tunerValue, colorValue);
  }


  // change all colors to new colors
  function changeColor(item, tunerValue, colorValue) {
    var itemClass = item.dataset.class;

    // https://davidwalsh.name/pseudo-element
    var oldColor = window.getComputedStyle(item, '::after').getPropertyValue('background-color');
    var color = createNewColor(oldColor, tunerValue, colorValue);
    var rule = '.' + itemClass + '::after { background-color: ' + color + ' !important; } ';
    rules += rule;
  }


  // mix two colors
  function createNewColor(oldColor, tunerValue, colorValue) {
    var oldColor = new ColorMix.Color(oldColor);
    var newColor = new ColorMix.Color(colorValue);

    tunerValue = parseInt(tunerValue);
    return ColorMix.mix([oldColor, newColor], [100 - tunerValue, tunerValue]);
  }


  // create a new stylesheet
  var oldStyle = document.getElementById("tuner");
  if (oldStyle) {
    oldStyle.remove();
  }

  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'tuner';
  style.innerHTML = rules;
  document.head.appendChild(style);
}
