$(function() {

  var viewModel = {
    locales: [
      {title: 'Secret Beach', location: {lat: 26.871856, lng: -80.049845}},
      {title: 'Dockside Promenade', location: {lat: 26.946291, lng: -80.082824}},
      {title: 'Sunnyside Urban Study Spot', location: {lat: 26.713548, lng: -80.055889}},
      {title: 'Fun-N-Fellowship Locale', location: {lat: 26.930736, lng: -80.123895}},
      {title: 'Midweek Gathering', location: {lat: 26.952620, lng: -80.138577}}
    ], // Hardcoded locations but no markers within viewModel.
    mark: locales.foreach(function(location) {
        console.log(location)
      });
    }



      // var marker = new google.maps.Marker({position: latLng, map: map});


   // viewModel
  ko.applyBindings(viewModel);

});
