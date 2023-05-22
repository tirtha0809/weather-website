const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityN;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4ce70448d7mshbb87ea1a2eeba28p18479bjsn310d8c15942f',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = async (city) => {
	cityName.innerHTML=city
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
};

// const fetchWeather = async () => {
//   await getWeather(city.value);
// };

fetchWeather();

submit.addEventListener("click", (e) => {
	getWeather(city.value)
  e.preventDefault();

});
getWeather("Delhi");