

$(document).ready(function(){
    showWeather();
    
    function showWeather() {
        var lat = 0;
        var lon = 0;
        var weatherJSON = "";
        var crd;
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    
        function success(pos) {
            crd = pos.coords;
            lat = Math.round(crd.latitude);
            lon = Math.round(crd.longitude);

            getWeather(lat, lon);
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            $("#condition").html("Your browser does not support Geolocation!");
        }
    }

    function getWeather(lat, lon) {
        return  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon)
        .then(function(json) { 
            printWeather(json);
         });
     }
     
     function printWeather (json) {
         var condition = json.weather[0].main;
         var icon = json.weather[0].icon;
         var celsius = Math.round(json.main.temp * 100) / 100;;
         var farenheit = Math.round((celsius * 1.8 + 32) * 100 ) / 100;
     
         $("#condition").html(condition);
         $("#temperature").html(farenheit);
     }
});



