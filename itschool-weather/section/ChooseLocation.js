/**
 * 1. Selectam dropdownul cu orase
 * 2. Selectam orasul din care vrem sa aflam vremea curenta
 * 3. Inlocuit orasul preselectat cu cel selectat
 * 4. Afisare date aferente orasului selectat
 */

const bucuresti = document.querySelector('.dropdown-menu .bucharest');
const timisoara = document.querySelector('.dropdown-menu .timisoara');
const oradea = document.querySelector('.dropdown-menu .oradea');
const sibiu = document.querySelector('.dropdown-menu .sibiu');
const sighisoara = document.querySelector('.dropdown-menu .sighisoara');

function updateCurrentCity(city) {
  const currentCity = document.querySelector('.current-city');
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  localStorage.setItem('city', city);
  updateCurrentCity(city);
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

bucuresti.addEventListener('click', function () {
  updateWeather('București');
});
timisoara.addEventListener('click', function () {
  updateWeather('Timișoara');
});
oradea.addEventListener('click', function () {
  updateWeather('Oradea');
});
sibiu.addEventListener('click', function () {
  updateWeather('Sibiu');
});
sighisoara.addEventListener('click', function () {
  updateWeather('Sighișoara');
});