var tunerChange = function(tunersID) {
  var tuners = document.querySelectorAll(tunersID);

  for (var i=0; i < tuners.length; i++) {
    tuners[i].addEventListener('input', change, false);
  }

  function change() {
    var tunerValue = this.value;
    var tunerType = this.parentNode.dataset.name;
    var colorValue = this.parentNode.parentNode.dataset.color;
    
    changeColorWheelColors(tunerType, tunerValue, colorValue);
  }
}


tunerChange('.tuner__range .range');
