$(".knob").knob({
  'width': 100,
  'height': 100,
  'fgColor': "#000",
  'bgColor': "#999",

  'release' : function(v) {
    console.log('knob:' + v);
  }
});
