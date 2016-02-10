function gMap(id,config){
	var gMap = this;
	config = config ? config : {};

	this.redrawMap = function(incomingData){
		var i = 0;

		(function loop() {
			codeAddress(incomingData[i]);
			if (++i < incomingData.length) {
				setTimeout(loop, 1000);
			}
		})();
	}
	
	function codeAddress(incomingData) {
		var geocoder =  new google.maps.Geocoder();
		geocoder.geocode( { 'address': incomingData[0]}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var viewCircle = new google.maps.Circle({
				  strokeColor: '#FF0000',
				  strokeOpacity: 0.2,
				  strokeWeight: 0.5,
				  fillColor: '#FF1493',
				  fillOpacity: 0.2,
				  map: map,
				  center: results[0].geometry.location,
				  radius: Math.sqrt(incomingData[1]) * 1000
				});
				var direction = 1;
				var rMin = 15000, rMax = viewCircle.getRadius()*5;
				setInterval(function() {
					var radius = viewCircle.getRadius();
					if ((radius > rMax) || (radius < rMin)) {
						direction *= -1;
					}
					viewCircle.setRadius(radius + direction * 800);
				}, 50);
			} else {
				console.log("Geocode was not successful for the following reason: " + status);
			}
		});
	}
};