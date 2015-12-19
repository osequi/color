// Change color wheel colors by applying a color function
// - tunerType: tint, shade, tone, ...
// - tunerValue: 0-100%
// - colorValue: #xxyyxx
//
//
var changeColorWheelColors = function(tunerValue, colorValue) {
  var colors = document.querySelectorAll('.color-wheel .colors .color');

  for (i = 0; i < colors.length; i++) {
    changeColor(colors[i], tunerValue, colorValue )
  }

  function changeColor(item, tunerValue, colorValue) {
    var itemClass = item.dataset.class;

    // https://davidwalsh.name/pseudo-element
    var oldColor = window.getComputedStyle(item, '::after').getPropertyValue('background-color')
    var color = createNewColor(oldColor, tunerValue, colorValue);
    var rule = '.' + itemClass + '::after { background-color: ' + color + '}';
    console.log('rule:' + rule);

    // - https://pankajparashar.com/posts/modify-pseudo-elements-css/
    document.styleSheets[0].insertRule(rule, 1);
  }

  function createNewColor(oldColor, tunerValue, colorValue) {
    var oldColor = new ColorMix.Color(oldColor);
    var newColor = new ColorMix.Color(colorValue);
    return ColorMix.mix([oldColor, newColor], [30, 70]);
  }
}
