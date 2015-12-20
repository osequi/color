var tunerChange = function(tunersID) {
  var tuners = document.querySelectorAll(tunersID);

  for (var i=0; i < tuners.length; i++) {
    tuners[i].addEventListener('change', change, false);
  }

  function change() {
    var tunerValue = parseInt(this.value);
    var oldTunerValue = this.parentNode.dataset.value;
    var tunerName = this.parentNode.dataset.name;
    var colorValue = this.parentNode.parentNode.dataset.color;

    this.parentNode.dataset.value = tunerValue;

    changeColorWheelColors(tunerName, tunerValue, oldTunerValue, colorValue);
  }
}


tunerChange('.tuner__range .range');
