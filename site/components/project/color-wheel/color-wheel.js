// Click on a slice on a wheel
var clickColorWheel = function(circleID) {
  var circle = document.querySelector(circleID);

  var slices = circle.querySelectorAll('.slice');

  for (i = 0; i < slices.length; i++) {
    slices[i].addEventListener('click', click, false);
  }

  function click() {
    var color = getComputedStyle(this).getPropertyValue("fill")
    document.body.style.backgroundColor = color;
  }
};



// Generate a single wheel withd D3.js
// - http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart
var createColorWheel = function(circleID, dataset, index) {
  'use strict';

  var width = index * sliceWidth;
  var height = width;
  var radius = Math.min(width, height) / 2;

  var color = d3.scale.category20b();

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
      return color(d.data.label);
    });
};


// Generate all wheels
var colorWheel = function(colorWheelID) {
  var container = document.querySelector(colorWheelID);

  for (var i = 0; i < wheels.length; i++) {
    createColorWheelDiv(i + 1, wheels.length + 1);
    drawColorWheel(i + 1, wheels[i]);
  }


  // Prepare dataset and draw a wheel
  function drawColorWheel(index, slices) {
    var dataset = [];

    for (var i = 0; i < slices; i++) {
      dataset.push({ label: 'label' + i, count: 10 });
    }

    createColorWheel('.color-wheel__circle--' + index, dataset, index);
  }


  // Create a div where to draw the wheel
  function createColorWheelDiv(index, total) {
    var wheel = document.createElement('div');
    wheel.setAttribute('class', 'color-wheel__circle color-wheel__circle--'  + index);

    wheel.style.zIndex = total - index;
    wheel.style.top = (total - index) * sliceWidth / 2 + "px";
    wheel.style.marginLeft = (total - index) * sliceWidth / 2 + "px";

    container.appendChild(wheel);
  }


  // Center the color wheel
  container.style.top = "-" + (wheels.length + 1) * sliceWidth / 2 + "px";
  container.style.left = "-" + (wheels.length + 1) * sliceWidth / 2 + "px";


  // Add layer navigation to enable color picking on overlapping layers
  var layers = document.createElement('div');
  layers.setAttribute('class', 'color-wheel__select');
  layers.style.left = (wheels.length + 1) * sliceWidth / 2 + "px";

  var steps = '';
  for (var i=0; i < wheels.length; i++) {
    steps += '<span class="layer" data-index="' + (wheels.length - i - 1) +'">' + (i + 1) + '</span>';
  }

  layers.innerHTML = "Select wheel: " + steps;
  container.appendChild(layers);
}


// Draw wheels
var sliceWidth = 120;
var wheels = [3, 3, 6, 12, 24, 48, 96];
colorWheel('.color-wheel');



// Attach click to wheels
window.onload = function(e) {
  for (var i = 0; i < wheels.length; i++) {
    clickColorWheel('.color-wheel__circle--' + (i + 1) + ' .svg');
  }
}
