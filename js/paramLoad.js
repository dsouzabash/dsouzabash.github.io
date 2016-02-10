var method = config.method;
var params = [];
for (var i = 0; i < config.metrics.length; i++) {
    for (var j = 0; j < config.elements[i].length; j++) {
        params.push({
            "reportDescription": {
                "source": "realtime",
                "reportSuiteID": config.reportSuite,
                "metrics": [{
                    "id": config.metrics[i]
                }],
                "elements": [{
                    "id": config.elements[i][j]
                }],
				"displayName": [{
					"id": config.displayName[i][j]
				}],
                "dateGranularity": "minute:1",
                "dateFrom": "-15 minutes"
            }
        });
    }
}

var trendGraph = new AnimatedTrendGraph("#trendGraph", {
    width: 500,
    height: 100,
    delay: 1000
});
var donutChart = new DonutChart("#donutChart", {
    width: 300,
    height: 450
});
var basicTable = new BasicTable("#data-table", {
    columns: ["Page", "Page Views"]
});
var miniTable = new MiniTable("#mini-table", {
    columns: ["Page"]
});
var barGraph = new barGraph("#bar-graph", {
	width: 300,
    height: 100
});

var gMap = new gMap("map",{
	width: 660,
	height: 800
});

// number counter
$(document).on("realtime-data-received", function(event, report) {
    // grab the total for this time period
    var total = report.totals[0];

    // add a comma every thousand numbers (i.e. 1000 => 1,000)
    var commaStep = $.animateNumber.numberStepFactories.separator(',');
	
	//console.log('index: ' +report.index);
	if(report.index==0){
		//console.log('total city:'+ total);
	    //Animate the number
		$('#totalCity').animateNumber({
			number: total,
			numberStep: commaStep
		}, 500);

		// trends graph
		data = report.data.map(function(minute) {
			return parseInt(minute.breakdownTotal[0]);
		});
		trendGraph.redrawGraph(data);
		
		//console.log(report.pageTotals);
		miniTable.update(report.pageTotals);
		
		//Bar Graph display - report.pageTotal[1] to be plotted on the graph
		barGraph.redrawChart(report.pageTotals);
		
		gMap.redrawMap(report.pageTotals);
	}
	if(report.index==1){
		//console.log('total views:'+ total);
	    //Animate the number
		$('#totalViews').animateNumber({
			number: total,
			numberStep: commaStep
		}, 500);
		
		//donuts graph
		donutChart.redrawChart(report.pageTotals);
		
		//Table display
		basicTable.update(report.pageTotals);
	}
	if(report.index==2){
		//console.log('total refers:'+ total);
	    //Animate the number
		$('#totalRefers').animateNumber({
			number: total,
			numberStep: commaStep
		}, 500);
	}
	if(report.index==3){
		//console.log('total exits:'+ total);
	    //Animate the number
		$('#totalExits').animateNumber({
			number: total,
			numberStep: commaStep
		}, 500);
	}
	if(report.index==4){
		//console.log('total search:'+ total);
	    //Animate the number
		$('#totalSearch').animateNumber({
			number: total,
			numberStep: commaStep
		}, 500);
	}
});

// call the realtime api
var makeRealTimeRequest = function(index) {
    //for(var i=0; i<params.length;i++){
    //console.log(index);
    MarketingCloud.makeRequest(config.username, config.secret, method, params[index], config.endpoint, function(response) {
        if (response.status == 200) {
			//console.log(report);
            var report = response.responseJSON.report;
			//console.log(report);
            setPageTotals(report);
			report.index = index;
			//$('#currentHeader').html(params[index].reportDescription.displayName[0].id.toUpperCase());
            if (report.pageTotals.length == 0) {
                $('#total').html('<span class="no-data">No Data</span>');
            } else {
                var event = jQuery.Event("realtime-data-received");
                $(document).trigger(event, report);
            }
        }
    });
    //}
};

var setPageTotals = function(report) {
    // return the total count for each page
    // formatted data is [["PageName", 123], ["PageName 2", 456]]
    var totals = [];
    $(report.data).each(function(i, minute) {
        $(minute.breakdown).each(function(j, page) {
            total = parseInt(page.counts[0]) + (totals[j] ? totals[j][1] : 0);
            totals[j] = [page.name, total];
        });
    });
    report.pageTotals = totals;
}

// code to run when the HTML is fully loaded
$(document).ready(function() {
    // request the initial report
    var index = 0;
    makeRealTimeRequest(index);
    // set the dashboard to make a report request every 5 seconds
    var time = config.interval; // milliseconds
    var screenTime = config.screenUpdate;

	var intervalID = window.setInterval(function() {
        for(var i=1;i<params.length;i++){
			//console.log(i);
			makeRealTimeRequest(i);
		}
			
    }, time);

    /*var screenInterval = window.setInterval(function() {
        index++;
        if (index == params.length) index = 0;
    }, screenTime);
	*/
});