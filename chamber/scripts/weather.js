const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.96&lon=-118.35&appid=c78747c4a9b3866f0e10641426bb61e2&units=imperial';

const fetchAPI = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    const windSpeed = data.wind.speed;
    
    let desc = data.weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');
    weatherDesc.textContent = `${desc}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weatherDesc);

    if (currentTemp <= 50 && windSpeed > 3.0) {
        const windChill = computeWindChill(currentTemp, windSpeed);
        document.querySelector('#windchill').innerHTML = `Wind Chill: ${windChill.toFixed(2)}`;
    } else {
        document.querySelector('#windchill').innerHTML = 'Wind Chill: N/A';
    }
}

const capitalize = (s) => {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

function computeWindChill(temperature, speed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
}

fetchAPI();