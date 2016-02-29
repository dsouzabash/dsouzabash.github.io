var doughnutData = [
	{
		value: 300,
		color:"#F7464A",
		label: "Phone"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "New Lines"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Add a line"
	},
	{
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "Data Orders"
	},
	{
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Jump Upgrades"
	}
];

barChartData = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,0.8)",
			highlightFill : "rgba(151,187,205,0.75)",
			highlightStroke : "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]
};

mapData = {
	cities : ["New York City", "Miami", "Seattle","Denver", "Chicago", "Dallas", "Washington D.C", "Philadelphia"],
	orders : ["10,000", "12,001", "9,807", "1,275", "3,541","7,531","6,232","2,103"],
	revenue : ["$1,000", "$2,001", "$807", "$275", "$541","$531","$232","$103"]
}