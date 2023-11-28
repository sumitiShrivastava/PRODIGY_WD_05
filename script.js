const apiKey = "ea4ca8d10721009a4f689973fd0f6a3b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    console.log(apiUrl + city +`&appid=${apiKey}`)
   
    if(data.weather[0].main == "Clouds"){
     weatherIcon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/sunney.png";
       }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
       }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
       }
       else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
       }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
