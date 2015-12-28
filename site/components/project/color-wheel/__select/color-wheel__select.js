var selectColorWheel = function(layersID, wheelsID) {
  var layers = document.querySelectorAll(layersID);
  var wheels = document.querySelectorAll(wheelsID);

  for (var i = 0; i < layers.length; i++) {
    layers[i].addEventListener('click', click, false);
  }

  function click() {
    index = this.dataset.index;

    for (var i = 0; i < wheels.length; i++) {
      wheels[i].classList.remove('color-wheel__circle--selected');
      layers[i].classList.remove('layer--selected');
    }

    this.classList.add('layer--selected');
    wheels[index].classList.add('color-wheel__circle--selected');
  }
}


selectColorWheel('.color-wheel__select .layer', '.color-wheel__circle');
