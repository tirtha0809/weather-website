const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4ce70448d7mshbb87ea1a2eeba28p18479bjsn310d8c15942f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;


            console.log(response)
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
    fun(city.value)

})

const init = () => {
    const tableElem = document.getElementsByTagName('table')[0];
    const tableBody = tableElem.getElementsByTagName('tbody')[0];
    const tableRows = tableBody.getElementsByTagName('tr');
    console.log(tableRows[0]);
    const cities = ['Kolkata', 'Chennai', 'London', 'Pune', 'Thailand'];
    cities.forEach((city, index) => {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
            .then(response => response.json())
            .then(response => {
                const tableData = tableRows[index].getElementsByTagName('td');
                tableData[0].innerHTML = response.cloud_pct;
                tableData[1].innerHTML = response.temp;
                tableData[2].innerHTML = response.feels_like;
                tableData[3].innerHTML = response.humidity;
                tableData[4].innerHTML = response.min_temp;
                tableData[5].innerHTML = response.max_temp;
                tableData[6].innerHTML = response.wind_speed;
                tableData[7].innerHTML = response.wind_degrees;
                tableData[8].innerHTML = response.sunrise;
                tableData[9].innerHTML = response.sunset;
            })
    })
}

getWeather("Delhi");
init();


