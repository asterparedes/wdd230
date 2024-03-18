const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.96&lon=-118.35&units=imperial&appid=c78747c4a9b3866f0e10641426bb61e2';

const apiFetch = async () => {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

const displayForecast = (data) => {
    const threedayforecast = data.list.filter(x => x.dt_txt.includes('15:00:00'));
    let day = 0; 
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    threedayforecast.forEach(forecast => {
        const d = new Date(forecast.dt_txt);
        document.querySelector(`#day${day+1}`).innerHTML = weekdays[d.getDay()];
        document.querySelector(`#forecast${day+1}`).innerHTML = forecast.main.temp_max.toFixed(0);
        day++;
    });
}

apiFetch();