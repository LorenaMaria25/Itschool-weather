const API_KEY = '39967645865776b5f736e4a8751af9df';

//facem request către API. Request-ul va fi de tip GET, întrucât dorim să primim datele.

// Construim link-urile (endpoint-urile) severelor de la care vom primi date.
function getCurrentWeatherEndpoint(city) {
  // Intotdeauna, cand folosim un API, putem obtine informatii extra prin query params.
  // lang=ro => Rezultatele vin in romana.
  // units=metric => Unitatea de masura va fi grade celsius.
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
//https://api.openweathermap.org/data/2.5/weather?q=Sibiu&lang=ro&units=metric&appid=a42aa18b9161f979bb4e0f48d3b7ded8

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

//https://api.openweathermap.org/data/2.5/forecast?q=Sibiu&lang=ro&units=metric&appid=a42aa18b9161f979bb4e0f48d3b7ded8