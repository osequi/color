// http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart
var createColorWheel = function() {
  'use strict';

  var dataset = [
    { label: 'Abulia', count: 10 },
    { label: 'Betelgeuse', count: 10 },
    { label: 'Cantaloupe', count: 10 },
    { label: 'Abulia', count: 10 },
    { label: 'Betelgeuse', count: 10 },
    { label: 'Cantaloupe', count: 10 }
  ];

  var width = 360;
  var height = 360;
  var radius = Math.min(width, height) / 2;

  var color = d3.scale.category20b();

  var svg = d3.select('.color-wheel__circle')
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

createColorWheel();
