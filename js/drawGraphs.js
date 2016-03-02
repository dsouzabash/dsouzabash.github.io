console.log('Inside draw Graph');
var firstLoadFlag;
window.onload = function(){
	firstLoadFlag = true;
	redrawDoughnut();
	/*var ctx = document.getElementById("chart-area").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
	document.getElementById('js-legend').innerHTML = myDoughnut.generateLegend();
	*/
};

$(".carousel").on('slid.bs.carousel', function () {
	//console.log('The carousel has finished sliding from one item to another!: ' + $('.item.active').attr('id'));
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
		//console.log('firstLoadFlag: ' + firstLoadFlag);
		if(firstLoadFlag == true)
			initMap();
		else{
			var i = 0;
			(function loop() {
				codeAddress(mapData.cities[i],mapData.orders[i],mapData.revenue[i]);
				if (++i < mapData.cities.length) {
					setTimeout(loop, 3000);
				}
			})();
		}
		$('#container').hide();
	}
	/*var duration = $(this).find('.item.active').attr('data-interval');
	console.log('In here: before pause' + duration);
	$(".carousel").carousel('pause');
	console.log('In here: after pause' + duration);
	setTimeout(function(){
		console.log('Inside setTimeout: ' + duration);
		$(".carousel").carousel('next');
	},duration);*/
});

//-------------------------------Gooogle Maps javscript ------------------------//
	var map;
    function initMap() {
		console.log('Inside initMap: ');
		firstLoadFlag = false;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.697948, lng: -97.314835},
          zoom: 5
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
				
				map.panTo(results[0].geometry.location);
				map.setCenter(results[0].geometry.location);
				var infowindow = new google.maps.InfoWindow({
					content: 'City :' + incomingCity + "<br/>" + 'Orders : ' + incomingOrders + "<br/>" +'Revenue : ' + incomingRevenue,
					
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
	redrawWidgetGraph();
};

var redrawWidgetGraph = function(){
	console.log('Inside redrawWidgetgraph');
	var ctx = document.getElementById("january-chart-area").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
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