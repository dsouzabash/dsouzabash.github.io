function barGraph(id, config) {
	// for event handlers
	var barGraph = this;
	
	// Dimensions of the chart.
	config = config ? config : {};
	this.width = config.width || 300;
	this.height = config.height || 300;
	this.separator = config.separator || null;
		
	this.redrawChart = function(incomingData) {
		//console.log("Inside redrawChart" + data);
		d3.select(id).selectAll('svg').remove();
		this.drawChart(incomingData);
	};
	
	this.drawChart = function(incomingData){
		//this.numberMap(0,0,200,255,0);
		var oldRange = incomingData[0][1];
		var newRange = '';
		var newValue = '';
		var color = [];
		var dataset = [];
		var plotData = [];
		var plotColor = ['#FF1493','#FF34B3','#EE6AA7','#FF69B4','#EE799F','#EEA9B8','#FFC0CB','#FFAEB9','#FFB6C1'];
		for (var i = 0; i <incomingData.length; i++) {           //Loop 25 times
			//var newNumber = Math.random() * 30;  //New random number (0-30)
			dataset.push(incomingData[i][1]);             //Add new number to array
			//color.push(newValue);
			newValue = numberMap(0,incomingData[0][1],0,70,incomingData[i][1]);
			plotData.push(newValue);
		}
		//console.log(plotData.color);
		
		
		//Width and height
		var w = config.width;
		var h = config.height;
		var barPadding = 1;
			
		//Create SVG element
		var svg = d3.select(id)
			.append("svg")
			.attr("width", w)
			.attr("height", h)
			.append("g")
			.attr("transform", "translate(0,0)")
			// define a new 'g' to scope the transition, and keep separate from the margin adjusting transform above
			.append("g");
		
		svg.attr("transform", "translate(0," + h + ") scale(1, 0)")
			.transition().duration(2000)
			.attr("transform", "translate(0,0) scale(1, 1)");

		
		
		svg.selectAll("rect")
		   .data(plotData)
		   .enter()
		   .append("rect")
		   .attr("x", function(d, i) {
		   		return i * (w / plotData.length);
		   })
		   .attr("y", function(d) {
		   		return h - (d);
		   })
		   .attr("width", w / plotData.length - barPadding)
		   .attr("height", function(d) {
		   		return d;
		   })
		   .style("fill", function(d,i) {
				//console.log('plotColor: ' + plotColor[i]);
				//var oldRange = (30 - 0);
				//d.color = plotColor[i];
				//console.log('plotColor: ' + d.color);
				var newRange = (255 - 200);
				var newValueRed = Math.round((((d - 0) * 55) / oldRange) + 220);
				var newValueGreen = Math.round((((d - 0) * 50) / oldRange) + 50);
				var newValueBlue = Math.round((((d - 0) * 50) / oldRange) + 100);
				//console.log('value: ' + d + 'newValueRed: ' + newValueRed + 'newValueGreen: ' + newValueGreen + 'newValueBlue: ' + newValueBlue);
				var colorSet = "rgb("+ newValueRed +", "+ newValueGreen +", "+ newValueBlue +")";
				///console.log(colorSet);
				return plotColor[i];
		   });
			   svg.selectAll("text")
				.data(dataset)
				.enter()	
				.append("text")
				.text(function(d) {
					//console.log('Inside text' + d);
					return Math.round(d);
				})
				.attr("text-anchor", "middle")
				.attr("x", function(d, i) {
			   		return i * (w / plotData.length) + (w / plotData.length - barPadding) / 2;
				})
				.attr("y", function(d,i) {
					//var val = h - (d * 4) +10;
					//console.log('d:' + d);
					if(d<5) return h - (plotData[i]);
					else return h - (plotData[i]);
				})
				.attr("font-family", "sans-serif")
				.attr("font-size", "11px")
				.attr("fill", "white");
	};
}

var numberMap = function(oldLow,oldHigh,newLow,newHigh,num){
		//console.log('Inside numberMap: ' + oldLow + ', ' + oldHigh + ', '+ newLow + ', '+ newHigh + ', '+ num); 
		oldRange = oldHigh - oldLow;
		newRange = newHigh - newLow;
		newValue = Math.round((((num - oldLow) * newRange) / oldRange) + newLow);
		//(6004) * 255 / 6805
		return newValue;
		//newValueGreen = Math.round((((d - 0) * 150) / 30) + 100);
		//newValueBlue = Math.round((((d - 0) * 100) / 30) + 150);
	}