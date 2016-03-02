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

barWidgetData = {
	labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
	datasets : [
		{
			label: "Phone",
			fillColor: "rgba(220,20,60,0.2)",
			strokeColor: "rgba(220,20,60,1)",
			pointColor: "rgba(220,20,60,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,20,60,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			label: "New Lines",
			fillColor: "rgba(255,182,193,0.2)",
			strokeColor: "rgba(255,182,193,1)",
			pointColor: "rgba(255,182,193,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(255,182,193,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			label: "Add a line",
			fillColor: "rgba(255,130,171,0.2)",
			strokeColor: "rgba(255,130,171,1)",
			pointColor: "rgba(255,130,171,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(255,130,171,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			label: "Data Orders",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			label: "Jump Upgrades",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]
};
	
mapData = {
	cities : ["New York City", "Miami", "Seattle","Denver", "Chicago", "Dallas", "Washington D.C", "Philadelphia"],
	orders : ["10,000", "12,001", "9,807", "1,275", "3,541","7,531","6,232","2,103"],
	revenue : ["$1,000", "$2,001", "$807", "$275", "$541","$531","$232","$103"]
}