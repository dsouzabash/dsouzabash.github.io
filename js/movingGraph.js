var t = 1297110663,
    v = 70,
    data = d3.range(33).map(next);

function next() {
  return {
    time: ++t,
    value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
  };
}

var w = 20,
    h = 80;

var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, w]);

var y = d3.scale.linear()
    .domain([0, 100])
    .rangeRound([0, h]);
	
	var chart3 = d3.select("#movingGraph")
  .append("svg:svg")
    .attr("class", "chart")
    .attr("width", w * data.length - 1)
    .attr("height", h);

chart3.append("svg:line")
    .attr("x1", 0)
    .attr("x2", w * data.length)
    .attr("y1", h - .5)
    .attr("y2", h - .5)
    .attr("stroke", "#000");

redraw3();

function redraw3() {

  var rect = chart3.selectAll("rect")
      .data(data, function(d) { return d.time; });

  rect.enter().insert("svg:rect", "line")
      .attr("x", function(d, i) { return x(i + 1) - .5; })
      .attr("y", function(d) { return h - y(d.value) - .5; })
      .attr("width", w)
      .attr("height", function(d) { return y(d.value); })
    .transition()
      .duration(1000)
      .attr("x", function(d, i) { return x(i) - .5; });

  rect.transition()
      .duration(1000)
      .attr("x", function(d, i) { return x(i) - .5; });

  rect.exit().transition()
      .duration(1000)
      .attr("x", function(d, i) { return x(i - 1) - .5; })
      .remove();

}
setInterval(function() {
  data.shift();
  data.push(next());
  //redraw1();
  //redraw2();
  redraw3();
}, 1500);