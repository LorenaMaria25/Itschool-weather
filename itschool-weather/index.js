// const log = console.log;

// window.addEventListener('load', () => {
//   //page has fully loaded
//   //location === window.location
//   log(location.href); //everything
//   log(location.pathname); //just folders and file
//   log(location.search); //query string beyond `?`
// });

const currentCity = document.querySelector('.current-city');

let currentCityLS = localStorage.getItem('city');

if (!currentCityLS) {
  localStorage.setItem('city', 'București');
  currentCityLS = 'București';
}

currentCity.innerHTML = currentCityLS;

displayCurrentWeather(currentCityLS);
displayWeatherForecast(currentCityLS);