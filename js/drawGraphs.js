console.log('Inside draw Graph');
window.onload = function(){
					var ctx = document.getElementById("chart-area").getContext("2d");
					window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
					document.getElementById('js-legend').innerHTML = myDoughnut.generateLegend();
				};
$(".carousel").on('slid.bs.carousel', function () {
	console.log('The carousel has finished sliding from one item to another!: ' + $('.item.active').attr('id'));
	if($('.item.active').attr('id') == 'doughnutChart'){
		redrawDoughnut();
	}
	else if($('.item.active').attr('id') == 'barGraph'){
		redrawGraph();
	}
	else if($('.item.active').attr('id') == 'lineGraph'){
		redrawLineGraph();
	}
	else if($('.item.active').attr('id') == 'cityMap'){
		initMap();
	}
});

//-------------------------------Gooogle Maps javscript ------------------------//
	var map;
    function initMap() {
		console.log('Inside initMap');
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.697948, lng: -97.314835},
          zoom: 4
        });
		var i = 0;
		(function loop() {		
			codeAddress(mapData.cities[i],mapData.orders[i],mapData.revenue[i]);
			if (++i < mapData.cities.length) {
				setTimeout(loop, 3000);
			}
		})();
    };  
	
	function codeAddress(incomingCity,incomingOrders,incomingRevenue) {
		var geocoder =  new google.maps.Geocoder();
		geocoder.geocode( { 'address': incomingCity}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var marker = new google.maps.Marker({
					position: results[0].geometry.location,
					map: map,
					title: 'Center (Click)'
				});
				var infowindow = new google.maps.InfoWindow({
					content: 'City :' + incomingCity + '\n Orders : ' + incomingOrders + '\n Revenue : ' + incomingRevenue,
					maxWidth: 200
				});
				infowindow.open(map, marker);
				window.setTimeout(function(){
					infowindow.close(map, marker);
				},1500);
				
			} else {
				console.log("Geocode was not successful for the following reason: " + status);
			}
		});
	}
//-------------------------------Donut javscript ------------------------//  
var redrawDoughnut = function(){
	console.log('Inside redrawDoughnut');
	var ctx = document.getElementById("chart-area").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
	document.getElementById('js-legend').innerHTML = myDoughnut.generateLegend();
};

//-------------------------------Graph javscript ------------------------//
var redrawGraph = function(){
	console.log('Inside redrawgraph');
	var ctx = document.getElementById("bar-graph").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive : true,
		width: 600,
		height: 400
	});
};

//-------------------------------Line Graph javscript ------------------------//
var redrawLineGraph = function(){
	console.log('Inside redrawgraph');
	var ctx = document.getElementById("line-graph").getContext("2d");
	window.myLine = new Chart(ctx).Line(barChartData, {
		responsive: true
	});
};

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};