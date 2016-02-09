function gMap(id,config){

	var gMap = this;
	config = config ? config : {};
	
	this.redrawMap = function(incomingData){
		//placeMarker(incomingData);
		/*
		setInterval(function(){
			for(var i=0;i<incomingData.length;i++){
				//placeMarker(incomingData);
				codeAddress(incomingData[i]);
			};
		},1000);
		*/
		var i = 0;

		(function loop() {
			codeAddress(incomingData[i]);
			if (++i < incomingData.length) {
				setTimeout(loop, 1000);
			}
		})();
	}
	
	function codeAddress(incomingData) {
		//console.log('inside codeAddres: ' + incomingData);
		var geocoder =  new google.maps.Geocoder();
		geocoder.geocode( { 'address': incomingData[0]}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				//map.setCenter(results[0].geometry.location);
				/*var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
				});*/
				var viewCircle = new google.maps.Circle({
				  strokeColor: '#FF0000',
				  strokeOpacity: 0.2,
				  //strokeWeight: 0.5,
				  fillColor: '#FF1493',
				  fillOpacity: 0.2,
				  map: map,
				  center: results[0].geometry.location,
				  radius: Math.sqrt(incomingData[1]) * 1000
				});
				console.log('Circle Radius: ' + viewCircle.getRadius());
				var direction = 1;
				var rMin = viewCircle.getRadius(), rMax = viewCircle.getRadius()*200;
				setInterval(function() {
					var radius = viewCircle.getRadius();
					if ((radius > rMax) || (radius < rMin)) {
						direction *= -1;
					}
					viewCircle.setRadius(radius + direction * 100);
				}, 50);
			} else {
				console.log("Geocode was not successful for the following reason: " + status);
			}
		});
	}
};