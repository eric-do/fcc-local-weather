console.log("CONNECTED");

if (navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(function(pos) {
      var crd = pos.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude : ${crd.longitude}`);
      console.log(`Altitude : ${crd.altitude}`);
  });
}