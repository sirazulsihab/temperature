
const loadWeather = () => {
    const inputCity = document.getElementById('input-city');
    const cityValue = inputCity.value;
    const apiKey = '3b74c975d00ffb895885fee101e99945';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => displayWeatherStatus(data))
}

const displayWeatherStatus = weather => {
    console.log(weather);
}

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function() {
    const cityName = document.getElementById('city-name');
    const cityText = cityName.innerText;
    
})