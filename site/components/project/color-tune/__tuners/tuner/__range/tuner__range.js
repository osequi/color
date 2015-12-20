var tunerChange = function(tunersID) {
  var tuners = document.querySelectorAll(tunersID);

  for (var i=0; i < tuners.length; i++) {
    tuners[i].addEventListener('change', change, false);
  }

  function change() {
    var tunerValue = this.value;
    var colorValue = this.parentNode.parentNode.dataset.color;

    changeColorWheelColors(tunerValue, colorValue);
  }
}


tunerChange('.tuner__range .range');
