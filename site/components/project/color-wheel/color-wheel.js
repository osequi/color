// Globals
var sliceWidth = 120;
var wheels = [3, 3, 6, 12, 24, 48, 96];



// Merging two arrays
// - (b, y, r) + (g, o, v) => (b, g, y, o, r, v)
function colorsNewArraysMerge(array1, array2) {
  mergeColors = [];

  for (var i = 0; i < array1.length; i++ ) {
    mergeColors.push(array1[i]);
    mergeColors.push(array2[i])
  }

  return mergeColors;
}


// Generate an array of colors to be mixed
// - returns an array of all combined colors from previous steps
// - (r, g, b) => (r, g, b, r)
function colorsNewArray(colors, index) {
  var allColors = colors;

  for (i = 2; i < index; i++) {
    var allColors2 = allColors.slice();
    allColors2.push(colors[0]);

    var newColors = colorsNewPalette(allColors2);
    allColors = colorsNewArraysMerge(allColors, newColors);
  }

  allColors.push(colors[0]);

  return allColors;
}


// Returns a new set of colors
// - (b, y, r, b) => (b+y = g, y+r = o, r+b = v)
function colorsNewPalette(colors, colorModel) {
  var newColors = [];

  if (colorModel == "ryb") {
    colorModel = "rgb";
  }

  for (var i = 0; i < colors.length - 1; i++) {
    if ((colorModel == "rgb") && (colors.length == 4) && (i == 0)) {
      var mixed = chroma("#0f0");
    } else {
      var color1 = chroma(colors[i]);
      var color2 = chroma(colors[i + 1]);
      var mixed = chroma.mix(color1, color2, 0.5, colorModel);
    }

    newColors.push(mixed);
  }

  return newColors;
}


// Return the primary colors for a given color model
function primaryColorsFromModel(colorModel) {
  switch (colorModel) {
    case 'ryb':
    case 'hsl':
    case 'hsv':
    case 'hsi':
    case 'lab':
    case 'lch':
    case 'hcl':
      return ["#00f", "#ff0", "#f00"];
      break;
    case 'rgb':
      return ["#00f", "#0f0", "#f00"];
      break;
  }
}



// Generate a color for a slice
function generateSliceColor(sliceIndex, index, colorModel) {
  var model = document.querySelector('.color-wheel__controls .color-model').value;
  var colors = primaryColorsFromModel(colorModel);

  if (index == 1) {
    return chroma(colors[sliceIndex]);
  } else {
    // Combine all colors into a new array
    var colors = colorsNewArray(colors, index);

    // Generate new colors from the combined array
    palette = colorsNewPalette(colors, colorModel);
    return palette[sliceIndex];
  }
}



// Generate a single wheel with D3.js
// - http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart
var createColorWheel = function(circleID, dataset, index, colorModel) {
  'use strict';

  var width = index * sliceWidth;
  var height = width;
  var radius = Math.min(width, height) / 2;

  var svg = d3.select(circleID)
    .append('svg')
    .attr('class', 'svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +
      ',' + (height / 2) + ')');

  var arc = d3.svg.arc()
    .outerRadius(radius);

  var pie = d3.layout.pie()
    .value(function(d) { return d.count; })
    .sort(null);

  var path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('class', 'slice')
    .attr('d', arc)
    .attr('fill', function(d, i) {
      return generateSliceColor(i, index, colorModel);
    });
};




// Generate all wheels
var colorWheel = function(colorWheelID) {
  var container = document.querySelector(colorWheelID);
  var wheelsContainer = container.querySelector('.color-wheel__wheels');

  // Which primary colors to start with
  var colorPrimaries = document.querySelector('.color-wheel__controls .primaries .primary').value;

  // Which color model to use
  var colorModel = document.querySelector('.color-wheel__controls .models .color-model').value;


  // Draw wheels
  for (var i = 0; i < wheels.length; i++) {
    createColorWheelDiv(i + 1, wheels.length + 1);
    drawColorWheel(i + 1, wheels[i], colorModel);
  }


  // Prepare dataset and draw a wheel
  function drawColorWheel(index, slices, colorModel) {
    var dataset = [];

    for (var i = 0; i < slices; i++) {
      dataset.push({ label: 'label' + i, count: 10 });
    }

    createColorWheel('.wheel--' + index, dataset, index, colorModel);
  }


  // Create a div where to draw the wheel
  function createColorWheelDiv(index, total) {
    var wheel = document.createElement('div');
    wheel.setAttribute('class', 'wheel wheel--'  + index);

    var position = (total - index) * sliceWidth / 2 + "px"

    wheel.style.zIndex = total - index;
    wheel.style.top = position;
    wheel.style.marginLeft = position;

    wheelsContainer.appendChild(wheel);
  }


  // Center the color wheel
  wheelsContainer.style.top = "-" + (wheels.length + 1) * sliceWidth / 2 + "px";
}

colorWheel('.color-wheel');
