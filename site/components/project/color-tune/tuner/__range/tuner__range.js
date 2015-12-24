var tunerChange = function(tunersID) {
  var tuners = document.querySelectorAll(tunersID);

  for (var i=0; i < tuners.length; i++) {
    tuners[i].addEventListener('change', change, false);
  }

  function change() {
    var tunerValue = parseInt(this.value);
    var oldTunerValue = this.parentNode.dataset.value;
    this.parentNode.dataset.value = tunerValue;

    var tunerName = this.parentNode.dataset.name;
    var colorValue = this.parentNode.parentNode.dataset.color;

    // Is there a set of radio buttons attached?
    var radioValue = '';

    var radio = this.parentNode.nextElementSibling;
    if (typeof(radio) != 'undefined' && radio != null) {
      var radios = radio.querySelectorAll('.radio');
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          radioValue = radios[i].value;
        }
      }
    }

    changeColorWheelColors(tunerName, tunerValue, oldTunerValue, colorValue, radioValue);
  }
}


tunerChange('.tuner__range .range');
