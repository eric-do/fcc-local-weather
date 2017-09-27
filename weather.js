var lat = 0;
var lon = 0;
var weather = "";
var icon = "";
var celsius = 0;
var farenheit = 0;

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

        weather = json.weather[0].main;
        icon = json.weather[0].icon;
        celsius = Math.round(json.main.temp * 100) / 100;;
        farenheit = Math.round((celsius * 1.8 + 32) * 100 ) / 100;
        console.log("Farenheight: " + farenheit);
        console.log("Celsius: " + celsius);
        console.log("Icon URL: " + icon);
    });
}

function printWeather () {
    console.log(weather);
    $("#temperature").html(farenheit);
}

$(document).ready(function(){
   
    setInterval(printWeather, 5000);
});