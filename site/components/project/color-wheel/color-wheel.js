// Change color wheel colors by applying a color function
// - tunerName: tint, shade, tone, ...
// - tunerValue: number
// - oldTunerValue: number
// - colorValue: #xxyyxx
var changeColorWheelColors = function(tunerName, tunerValue, oldTunerValue, colorValue, radioValue) {
  var colors = document.querySelectorAll('.color-wheel .colors .color');

  var rules = '';

  for (i = 0; i < colors.length; i++) {
    changeColor(colors[i], tunerName, tunerValue, oldTunerValue, colorValue, radioValue);
  }


  // Change all colors to new colors
  function changeColor(item, tunerName, tunerValue, oldTunerValue, colorValue, radioValue) {
    var itemClass = item.dataset.class;
    var oldColor = window.getComputedStyle(item, '::after').getPropertyValue('background-color');

    switch (tunerName) {
      case 'tone':
        var color = changeTone(oldColor, tunerValue, oldTunerValue);
        break;
      case 'tint':
        var color = changeBrightness(oldColor, tunerValue, oldTunerValue);
        break;
      case 'shade':
        var color = changeDarkness(oldColor, tunerValue, oldTunerValue);
        break;
      case 'luminance':
        var color = changeLuminace(oldColor, tunerValue, radioValue);
        break;
    }

    if (tunerName == 'tone') {

    }

    var rule = '.' + itemClass + '::after { background-color: ' + color + ' !important; } ';
    rules += rule;
  }

  // Change luminace
  function changeLuminace(oldColor, tunerValue, radioValue) {
    var color = chroma(oldColor);
    console.log(radioValue);
    return color.luminance(tunerValue / 100, radioValue);
  }

  // Change darkness
  function changeDarkness(oldColor, tunerValue, oldTunerValue) {
    var color = chroma(oldColor);

    var diff = oldTunerValue - tunerValue;
    var value = Math.abs(diff) / 100;

    if (diff < 0) {
      return color.darken(value);
    } else {
      return color.brighten(value);
    }
  }

  // Change brightness
  function changeBrightness(oldColor, tunerValue, oldTunerValue) {
    var color = chroma(oldColor);

    var diff = oldTunerValue - tunerValue;
    var value = Math.abs(diff) / 100;

    if (diff < 0) {
      return color.brighten(value);
    } else {
      return color.darken(value);
    }
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
