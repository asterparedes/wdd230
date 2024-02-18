
function initialize() {
    const temperature = parseFloat(document.querySelector('#temperature').innerHTML);
    const speed = parseFloat(document.querySelector('#windspeed').innerHTML);
    
    if (temperature <= 50 && speed > 3.0) {
        const windChill = computeWindChill(temperature, speed);
        document.querySelector('#windchill').innerHTML = windChill.toFixed(2);
    }else{
        document.querySelector('#windchill').innerHTML = "N/A";
    }
}

function computeWindChill(temperature, speed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
}

initialize();