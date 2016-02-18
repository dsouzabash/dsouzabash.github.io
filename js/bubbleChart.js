/*$(document).ready(function () {
	var incomingData= [['Chicago','200'],['NYC','101'],['Seaette','340'],['Texas','220'],['california','540'],['san fran','140'],['portland','121'],['phoenix','112'],['Detroit','205']];
	setInterval(function(){
		console.log('Inside setiNTERVAL');
		callBubble(incomingData);
	},3000);
});
*/

function bubbleChart(id, config) {
	//var bubbleChart = this;
	this.redrawChart = function(){
		var incomingData= [['Chicago','200'],['New York City','101'],['Seattle','340'],['Dallas','220'],['Loas Angeles','540'],['San Francisco','140'],['Portland','121'],['Phoenix','112'],['Detroit','205']];
		var items = [];
			for(var i =0; i<incomingData.length;i++){
				items.push({text:incomingData[i][0],count:Math.round(1000*Math.random())}); 
		}
		/*function randomData(){
			return items.map(function(d){ 
				return {text:d.text, count:1000*Math.random()};});
		}
		randomData();*/
		//console.log(items);
		d3.select(id).selectAll('svg').remove();
		var bubbleChart = new d3.svg.BubbleChart({
			supportResponsive: true,
			//container: => use @default
			size: 600,
			//viewBoxSize: => use @default
			innerRadius: 600 / 3.5,
			//outerRadius: => use @default
			radiusMin: 50,
			//radiusMax: use @default
			//intersectDelta: use @default
			//intersectInc: use @default
			//circleColor: use @default
			data: {
			  items: items,
			  eval: function (item) {return item.count;},
			  classed: function (item) {return item.text.split(" ").join("");}
			},
			plugins: [
			  {
				name: "central-click",
				options: {
				  text: "(See more detail)",
				  style: {
					"font-size": "12px",
					"font-style": "italic",
					"font-family": "Source Sans Pro, sans-serif",
					//"font-weight": "700",
					"text-anchor": "middle",
					"fill": "white"
				  },
				  attr: {dy: "65px"},
				  centralClick: function() {
					alert("Here is more details!!");
				  }
				}
			  },
			  {
				name: "lines",
				options: {
				  format: [
					{// Line #0
					  textField: "count",
					  classed: {count: true},
					  style: {
						"font-size": "28px",
						"font-family": "Source Sans Pro, sans-serif",
						"text-anchor": "middle",
						fill: "white"
					  },
					  attr: {
						dy: "0px",
						x: function (d) {return d.cx;},
						y: function (d) {return d.cy;}
					  }
					},
					{// Line #1
					  textField: "text",
					  classed: {text: true},
					  style: {
						"font-size": "14px",
						"font-family": "Source Sans Pro, sans-serif",
						"text-anchor": "middle",
						fill: "white"
					  },
					  attr: {
						dy: "20px",
						x: function (d) {return d.cx;},
						y: function (d) {return d.cy;}
					  }
					}
				  ],
				  centralFormat: [
					{// Line #0
					  style: {"font-size": "50px"},
					  attr: {}
					},
					{// Line #1
					  style: {"font-size": "30px"},
					  attr: {dy: "40px"}
					}
				  ]
				}
			  }]
		  });
	}
} 