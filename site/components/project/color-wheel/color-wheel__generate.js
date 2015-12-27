// http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart
var createColorWheel = function(circleID, dataset, index) {
  'use strict';

  // If these are changed also the css must be updated to ovrelap circles
  var sliceWidth = 90;

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

var dataset = [
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 10 },
  { label: 'Cantaloupe', count: 10 }
];
createColorWheel('.color-wheel__circle--1', dataset, 1);

var dataset = [
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 10 },
  { label: 'Cantaloupe', count: 10 },
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 10 },
  { label: 'Cantaloupe', count: 10 }
];
createColorWheel('.color-wheel__circle--2', dataset, 2);


var dataset = [
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 10 },
  { label: 'Cantaloupe', count: 10 },
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 10 },
  { label: 'Cantaloupe', count: 10 },
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 10 },
  { label: 'Cantaloupe', count: 10 },
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 10 },
  { label: 'Cantaloupe', count: 10 }
];
createColorWheel('.color-wheel__circle--3', dataset, 3);
