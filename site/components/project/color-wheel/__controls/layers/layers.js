var createLayerNavigation = function(layersID) {
  var layers = document.querySelector(layersID);

  for (var i=0; i < wheels.length; i++) {
    var layer = document.createElement('span');
    layer.setAttribute('class', 'layer');
    layer.setAttribute('data-index', wheels.length - i - 1);
    layer.innerHTML = (i + 1);
    layers.appendChild(layer);
  }
}

createLayerNavigation('.color-wheel .layers');



var selectColorWheel = function(layersID, wheelsID) {
  var layers = document.querySelectorAll(layersID);
  var wheels = document.querySelectorAll(wheelsID);

  for (var i = 0; i < layers.length; i++) {
    layers[i].addEventListener('click', click, false);
  }

  function click() {
    index = this.dataset.index;

    for (var i = 0; i < wheels.length; i++) {
      wheels[i].classList.remove('wheel--selected');
      layers[i].classList.remove('layer--selected');
    }

    this.classList.add('layer--selected');
    wheels[index].classList.add('wheel--selected');
  }
}


selectColorWheel('.color-wheel .layer', '.color-wheel .wheel');
