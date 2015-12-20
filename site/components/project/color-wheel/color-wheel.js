// Change color wheel colors by applying a color function
// - tunerName: tint, shade, tone, ...
// - tunerValue: number
// - oldTunerValue: number
// - colorValue: #xxyyxx
var changeColorWheelColors = function(tunerName, tunerValue, oldTunerValue, colorValue) {
  var colors = document.querySelectorAll('.color-wheel .colors .color');

  var rules = '';

  for (i = 0; i < colors.length; i++) {
    changeColor(colors[i], tunerName, tunerValue, oldTunerValue, colorValue);
  }


  // Change all colors to new colors
  function changeColor(item, tunerName, tunerValue, oldTunerValue, colorValue) {
    var itemClass = item.dataset.class;
    var oldColor = window.getComputedStyle(item, '::after').getPropertyValue('background-color');

    if (tunerName == 'tone') {
      var color = changeTone(oldColor, tunerValue, oldTunerValue);
    }

    var rule = '.' + itemClass + '::after { background-color: ' + color + ' !important; } ';
    rules += rule;
  }


  // Change tone
  function changeTone(oldColor, tunerValue, oldTunerValue) {
    var color = chroma(oldColor);

    var diff = oldTunerValue - tunerValue;
    var value = Math.abs(diff) / 10;

    if (diff < 0) {
      return color.saturate(value);
    } else {
      return color.desaturate(value);
    }
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
