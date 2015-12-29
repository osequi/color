$(".knob").knob({
  'width': 100,
  'height': 100,
  'fgColor': "#7040FF",
  'bgColor': "#CDCDCD",

  'release' : function(v) {
    console.log('knob:' + v);
  }
});


var knobBackground = function(knobsID) {
  var knobs = document.querySelectorAll(knobsID);

  for (i = 0; i < knobs.length; i++) {
    var color = knobs[i].dataset.background;
    console.log('c:' + color);
    knobs[i].parentNode.querySelector('canvas').style.backgroundColor = color;
  }
}

knobBackground('.tuner .knob');
