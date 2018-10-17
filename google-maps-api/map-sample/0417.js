

var canvas = document.getElementById('map-canvas');
var latlng = new google.maps.LatLng( 35.659054,139.700558 );

var mapOptions={
	zoom:15,
	center: latlng,
};

var map = new google.maps.Map(canvas,mapOptions);

/*var marker = new google.maps.Marker({
	map: map,
	position: latlng,
});*/
/*
var circle = new google.maps.Circle({
	center:latlng,
	map: map,
	radius: 900,
	strokeColor:"red",
	visible: true,

});
*/
//map.fitBounds(circle.getBounds());
/*
 var request = {
    location: latlng,
    radius: '300',
    types: ['cafe']
  };

service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
*/

