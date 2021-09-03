
const loadWeather = () => {
    const inputCity = document.getElementById('input-city');
    const cityValue = inputCity.value;
    const apiKey = '3b74c975d00ffb895885fee101e99945';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => displayWeatherStatus(data))
}
const setValue = (id, value) => {
    document.getElementById(id).innerText = value;
}
const displayWeatherStatus = weather => {
    // set city Name
    setValue('city-name' , weather.name);
    // set temp
    setValue('temp', weather.main.temp)
    // set weather condition
    setValue('condition', weather.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
}

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function() {
    loadWeather()

})