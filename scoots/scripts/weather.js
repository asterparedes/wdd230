const weatherBanner = document.querySelector('.weather-banner')
const weatherButton = document.querySelector('#weather-button')
const tempMax = document.querySelector('#current-temp-max')
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temperature');
const currentWeatherDesc = document.querySelector('#current-description');
const currentHumidity = document.querySelector('#current-humidity');
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.47&lon=-86.95&appid=c78747c4a9b3866f0e10641426bb61e2&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.47&lon=-86.95&units=imperial&appid=c78747c4a9b3866f0e10641426bb61e2';

const fetchAPI = async () => {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

const fetchForecastAPI = async () => {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

let displayCurrentWeather = (data) => {
    tempMax.innerHTML = `${data.main.temp_max.toFixed(0)} &deg;F`;
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    currentHumidity.textContent = `Humidity: ${data.main.humidity}%`;

    let desc = data.weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');
    currentWeatherDesc.textContent = `${desc}`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', currentWeatherDesc);
}

const displayForecast = (data) => {
    const nextDayForecast = data.list.filter(x => x.dt_txt.includes('15:00:00'));
    const day = 0;
    nextDayForecast.forEach(forecast => {
        document.querySelector(`#next-day-temp${day+1}`).innerHTML = forecast.main.temp_max.toFixed(0);
        document.querySelector(`#next-day-humidity${day+1}`).innerHTML = forecast.main.humidity;
        day++;
    });
}

const showBanner = () => {
    weatherBanner.style.display = 'block';
}

const closeBanner = () => {
    weatherBanner.style.display = 'none';
}

weatherButton.addEventListener('click', () => {
    closeBanner();
});

const capitalize = (letter) => {
    return `${letter.charAt(0).toUpperCase()}${letter.slice(1)}`;
}

fetchAPI();
fetchForecastAPI();