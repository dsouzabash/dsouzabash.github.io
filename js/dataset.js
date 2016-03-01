var doughnutData = [
	{
		value: 300,
		color:"#FF1493",
		label: "Phone"
	},
	{
		value: 50,
		color: "#FF3E96",
		highlight: "#FF6EB4",
		label: "New Lines"
	},
	{
		value: 100,
		color: "#FF6EB4",
		highlight: "#FFC870",
		label: "Add a line"
	},
	{
		value: 40,
		color: "#FF82AB",
		highlight: "#A8B3C5",
		label: "Data Orders"
	},
	{
		value: 120,
		color: "#FFAEB9",
		highlight: "#616774",
		label: "Jump Upgrades"
	}
];

barChartData = {
	labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
	datasets : [
		{
			fillColor : "rgba(255,20,147,0.8)",
			strokeColor : "rgba(255,20,147,0.8)",
			highlightFill: "rgba(255,20,147,0.75)",
			highlightStroke: "rgba(255,20,147,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			fillColor : "rgba(255,192,203,0.8)",
			strokeColor : "rgba(255,192,203,0.8)",
			highlightFill : "rgba(255,192,203,0.8)",
			highlightStroke : "rgba(255,192,203,0.8)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]
};

mapData = {
	cities : ["New York City", "Miami", "Seattle","Denver", "Chicago", "Dallas", "Washington D.C", "Philadelphia"],
	orders : ["10,000", "12,001", "9,807", "1,275", "3,541","7,531","6,232","2,103"],
	revenue : ["$1,000", "$2,001", "$807", "$275", "$541","$531","$232","$103"]
}