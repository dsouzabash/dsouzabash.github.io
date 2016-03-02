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
	/*var ctx = document.getElementById("chart-area").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
	document.getElementById('js-legend').innerHTML = myDoughnut.generateLegend();
	*/
};

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
	$("#january,#januarySales,#february,#march,#april,#may,#june,#july,#august,#september,#october,#november,#december").show();
	$("#februarySales,#marchSales,#aprilSales,#maySales,#juneSales,#julySales,#augustSales,#septemberSales,#octoberSales,#novemberSales,#decemberSales").hide();
	var ctx = document.getElementById("chart-area").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
	document.getElementById('js-legend').innerHTML = myDoughnut.generateLegend();
	redrawWidgetGraph();
};

var redrawWidgetGraph = function(){
	console.log('Inside redrawWidgetgraph');
	var commaStep = $.animateNumber.numberStepFactories.separator(',');
	$('#totalJanuaryMonthlySales,#totalFebruaryMonthlySales,#totalMarchMonthlySales,#totalAprilMonthlySales,#totalMayMonthlySales,#totalJuneMonthlySales,#totalJulyMonthlySales,#totalAugustMonthlySales,#totalSeptemberMonthlySales,#totalOctoberMonthlySales,#totalNovemberMonthlySales,#totalDecemberMonthlySales').animateNumber({
			number: randomScalingFactor(),
			numberStep: commaStep
	}, 3000);
	var janCtx = document.getElementById("january-chart-area").getContext("2d");
	window.janBar = new Chart(janCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#january,#januarySales").animate({
			height: 'toggle'
		});
		$("#februarySales").show();
	},10000);
	var febCtx = document.getElementById("february-chart-area").getContext("2d");
	window.febBar = new Chart(febCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#february,#februarySales").animate({
			height: 'toggle'
		});
		$("#marchSales").show();
	},15000);
	var marCtx = document.getElementById("march-chart-area").getContext("2d");
	window.marBar = new Chart(marCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#march,#marchSales").animate({
			height: 'toggle'
		});
		$("#aprilSales").show();
	},20000);
	var aprCtx = document.getElementById("april-chart-area").getContext("2d");
	window.aprBar = new Chart(aprCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#april,#aprilSales").animate({
			height: 'toggle'
		});
		$("#maySales").show();
	},25000);
	var mayCtx = document.getElementById("may-chart-area").getContext("2d");
	window.mayBar = new Chart(mayCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#may,#maySales").animate({
			height: 'toggle'
		});
		$("#juneSales").show();
	},30000);
	var juneCtx = document.getElementById("june-chart-area").getContext("2d");
	window.juneBar = new Chart(juneCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#june,#juneSales").animate({
			height: 'toggle'
		});
		$("#julySales").show();
	},35000);
	var julCtx = document.getElementById("july-chart-area").getContext("2d");
	window.julBar = new Chart(julCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#july,#julySales").animate({
			height: 'toggle'
		});
		$("#augustSales").show();
	},40000);
	var augCtx = document.getElementById("august-chart-area").getContext("2d");
	window.augBar = new Chart(augCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#august,#augustSales").animate({
			height: 'toggle'
		});
		$("#septemberSales").show();
	},45000);
	var septCtx = document.getElementById("september-chart-area").getContext("2d");
	window.septBar = new Chart(septCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#september,#septemberSales").animate({
			height: 'toggle'
		});
		$("#octoberSales").show();
	},50000);
	var octCtx = document.getElementById("october-chart-area").getContext("2d");
	window.octBar = new Chart(octCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#october,#octoberSales").animate({
			height: 'toggle'
		});
		$("#novemberSales").show();
	},55000);
	var novCtx = document.getElementById("november-chart-area").getContext("2d");
	window.novBar = new Chart(novCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#november,#novemberSales").animate({
			height: 'toggle'
		});
		$("#decemberSales").show();
	},60000);
	var decCtx = document.getElementById("december-chart-area").getContext("2d");
	window.decBar = new Chart(decCtx).Bar(barWidgetData, {
		responsive : true,
		width: 1000,
		height: 100
	});
	window.setTimeout(function(){
		$("#december,#decemberSales").animate({
			height: 'toggle'
		});
	},65000);	
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