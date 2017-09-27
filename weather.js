console.log("CONNECTED");

var lat = 0;
var lon = 0;

if (navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(function(pos) {
      var crd = pos.coords;
      lat = Math.round(crd.latitude);
      lon = Math.round(crd.longitude);

      console.log('Your current position is:');
      console.log(`Latitude : ${lat}`);
      console.log(`Longitude : ${lon}`);
  });

  getWeather();
}

function getWeather() {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon, function(json) {
        console.log(JSON.stringify(json));
    });
}