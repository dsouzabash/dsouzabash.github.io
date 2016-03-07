console.log('Inside draw Graph');
/*(function(){
	console.log)('inside angular function');
	var app = angular.module('infoGraphics',[]);
	//Resource Controller
	app.controller('legendController',function(){
		console.log('Inside legendController');
		this.legend = doughnutData;
	});
})();*/
var firstLoadFlag;
window.onload = function(){
	firstLoadFlag = true;
	redrawDoughnut();
	var duration = $('.carousel-inner').find('.item.active').attr('data-interval');
	console.log('In here: before pause' + duration);
	$(".carousel").carousel('pause');
	console.log('In here: after pause' + duration);
	moveTimeout = setTimeout(function(){
		console.log('Inside setTimeout: ' + duration);
		$(".carousel").carousel('next');
	},duration);
	/*var ctx = document.getElementById("chart-area").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
	document.getElementById('js-legend').innerHTML = myDoughnut.generateLegend();
	*/
};

var moveTimeout;
var monthlyTimeout;

$(".carousel").on('slid.bs.carousel', function () {
	//console.log('The carousel has finished sliding from one item to another!: ' + $('.item.active').attr('id'));
	if($('.item.active').attr('id') == 'doughnutChart'){
		$('#container').show();
		redrawDoughnut();
	}
	else if($('.item.active').attr('id') == 'barGraph'){
		$('#container').show();
		redrawGraph();
	}
	else if($('.item.active').attr('id') == 'lineGraph'){
		$('#container').show();
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
	var duration = $(this).find('.item.active').attr('data-interval');
	console.log('In here: before pause' + duration);
	$(".carousel").carousel('pause');
	console.log('In here: after pause' + duration);
	moveTimeout = setTimeout(function(){
		console.log('Inside setTimeout: ' + duration);
		$(".carousel").carousel('next');
	},duration);
});

$('.carousel-control.right,.carousel-control.left').on('click', function(){
    clearTimeout(moveTimeout);
	clearTimeout(monthlyTimeout);
});

//-------------------------------Gooogle Maps javscript ------------------------//
	var map;
    function initMap() {
		console.log('Inside initMap: ');
		if(firstLoadFlag == true){
			var i = 0;
		}
		firstLoadFlag = false;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.697948, lng: -97.314835},
          zoom: 5
        });
		
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

var monthArray = ['january','february','march','april','may','june','july','august','september','october','november','december'];
var monthlySalesGraph = ['januarySales','februarySales','marchSales','aprilSales','maySales','juneSales','julySales','augustSales','septemberSales','octoberSales','novemberSales','decemberSales'];
var monthlyChartArea = ['january-chart-area','february-chart-area','march-chart-area','april-chart-area','may-chart-area','june-chart-area','july-chart-area','august-chart-area','september-chart-area','october-chart-area','november-chart-area','december-chart-area'];
var totalMonthlySales = ['totalJanuaryMonthlySales','totalFebruaryMonthlySales','totalMarchMonthlySales','totalAprilMonthlySales','totalMayMonthlySales','totalJuneMonthlySales','totalJulyMonthlySales','totalAugustMonthlySales','totalSeptemberMonthlySales','totalOctoberMonthlySales','totalNovemberMonthlySales','totalDecemberMonthlySales'];
var commaStep = $.animateNumber.numberStepFactories.separator(',');
var i;
var redrawWidgetGraph = function(){
	console.log('Inside redrawWidgetgraph: ' + i);
	if(firstLoadFlag == true || i ==11){
		i = -1;
	}
	
	(function loop() {
		monthlyDisplay(i);
		if (++i < monthArray.length) {
			monthlyTimeout = setTimeout(loop, 5000);
		}
		/*console.log('i: ' + i);
		if(i== monthArray.length){
			console.log('Inside second if');
			$("#" + monthArray[i-1] + ",#" + monthlySalesGraph[i-1]).animate({
				height: 'toggle'
			});
			i = -1;
			loop();
		}*/
	})();
};

var monthlyDisplay = function(index){
	console.log('Inside monthlyDisplay: ' + monthArray[index]);
	if(index!=12){
		$("#" + monthArray[index] + ",#" + monthlySalesGraph[index]).animate({
			height: 'toggle'
		});
		$("#" + monthArray[index+1] + ",#" + monthlySalesGraph[index+1]).show();
		var monthCtx = document.getElementById(monthlyChartArea[index+1]).getContext("2d");
		window.monthBar = new Chart(monthCtx).Bar(barWidgetData, {
			responsive : true,
			width: 1000,
			height: 100
		});
		$("#" + totalMonthlySales[index+1]).animateNumber({
			number: randomScalingFactor(),
			numberStep: commaStep
		}, 2500);
	}
};

//-------------------------------Graph javscript ------------------------//
var redrawGraph = function(){
	console.log('Inside redrawgraph');
	var ctx = document.getElementById("bar-graph").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive : true,
		width: 600,
		height: 200
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

var randomScalingFactor = function(){ return Math.round(Math.random()*10000)};