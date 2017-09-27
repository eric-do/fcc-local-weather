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
        console.log(json.weather[0].main);
        console.log(json.main.temp);
        console.log((json.main.temp) * 1.8 + 32);

        var weather = json.weather[0].main;
        var celsius = Math.round(json.main.temp * 100) / 100;;
        var farenheit = Math.round((celsius * 1.8 + 32) * 100 ) / 100;
        console.log("Farenheight: " + farenheit);
        console.log("Celsius: " + celsius);
    });
}