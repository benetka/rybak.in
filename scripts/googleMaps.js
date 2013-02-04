/*
Author: Jan Rybak
Twitter: @jendarybak
Author URL: http://www.rybak.in
*/

/*
 * Google Maps visual style (Brown version)
 * and settings (position, center, controlls).
 *
*/
function initialize() {

	var styles = [
	    {
	      stylers: [
	        { hue: "#fcd2d2" },
	        { saturation: -20 }
	      ]
	    },{
		    "featureType": "water",
		    "stylers": [
		      { "color": "#847065" }
		    ]
		  },{
		    "featureType": "landscape",
		    "stylers": [
		      { "color": "#f3ede1" },
		    ]
		  },{
	      featureType: "road",
	      elementType: "labels",
	      stylers: [
	        { visibility: "off" }
	      ]
	    },{
	      featureType: "road",
	      stylers: [
		    { "color": "#c9c3c0" }
	      ]
	    },{
		    "featureType": "poi",
		    "stylers": [
			 { visibility: "off" }
		    ]
		  }
	  ];

	var myLatlngPilsen = new google.maps.LatLng(49.706953,13.413549);
	var centerMapPilsen = new google.maps.LatLng(47.040182,2.724609);
	
	var myLatlngTrondheim = new google.maps.LatLng(63.420371,10.432298);
	var centerMapTrondheim = new google.maps.LatLng(57.875599,7.259766);
			
	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

	var mapOptions = {
		zoom: 4,
		center: centerMapTrondheim,
		mapTypeControl: false,
   	  	scrollwheel: false,
		zoomControl: true,
		draggable: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

		var marker = new google.maps.Marker({
			position: myLatlngTrondheim,
			map: map,
			title: 'Here I am right now!'
		});
}

function loadGoogleMaps() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCkUYxG2fqPpsXNRVeiw2c0_qo6JdbjtE4&sensor=false&callback=initialize";
	document.body.appendChild(script);
}