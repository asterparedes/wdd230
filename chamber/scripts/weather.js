const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('figcaption');
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
        console.log(error);
    }
}

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let desc = data.weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');
    weatherDesc.textContent = `${desc}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weatherDesc);
}

const capitalize = (s) => {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

fetchAPI();