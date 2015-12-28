var colorModelChange = function(colorModelSelectorID) {
  var colorModelSelector = document.querySelector(colorModelSelectorID);

  colorModelSelector.addEventListener('change', click, false);

  function click() {
    colorWheel('.color-wheel');
  }
}


colorModelChange('.color-wheel__models .color-model');
