    var map;
    $(document).ready(function() {
      map = new GMaps({
        el: '#map',
        lat: 43.946,
        lng: 4.808
      });
      map.addMarker({
        lat: 43.946,
        lng: 4.808,
        title: 'Marker with InfoWindow',
        infoWindow: {
        content: '<p>BeautyFood</p>'
        }
      });
    });