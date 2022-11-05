//The conversion factor from Miles to Kilometers and vice versa is: 1.0 Mile = 1.60934 Kilometers.

function distanceConverter(valNum) {
    document.getElementById("outputMiles").innerHTML = valNum /1.60934;
  }