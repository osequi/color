var createLayerNavigation = function(layersID) {
  var layers = document.querySelector(layersID);

  for (var i=0; i < wheels.length; i++) {
    var layer = document.createElement('span');
    layer.setAttribute('class', 'layer');
    layer.setAttribute('data-index', wheels.length - i + 1);
    layer.innerHTML = (i + 1);
    layers.appendChild(layer);
  }
}

createLayerNavigation('.color-wheel .layers');
