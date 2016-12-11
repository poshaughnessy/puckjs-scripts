var on = false;
var green = false;

setInterval(function() {
  on = !on;
  
  if (on) {
    green = !green;
  }
  
  var led = green ? LED2 : LED1;
  
  led.write(on);
}, 200);
