
const apiKey = "e37652534c25cbef2929807837f0a6fd&units=metric"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        // document.getElementsByClassName("error")[0].style.display = "block";  // when we use getElemnetsByClassName it returns banch of element not a single element 
        document.querySelector(".error").style.display = "block";  //it returns a single element so we don't need to give indexing like [0]
        document.querySelector(".weather").style.display = "none";
    }
    else {
        let data = await response.json()
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C"
        document.querySelector(".city").innerText = data.name
        document.querySelector(".humidity").innerText = data.main.humidity + "%"
        document.querySelector(".wind").innerText = data.wind.speed + " km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = 'images/clear.png';
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = 'images/rain.png';
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = 'images/drizzle.png';
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = 'images/snow.png';
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = 'images/mist.png';
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})

