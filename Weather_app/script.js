const apiKey = "f469fe954b5feb876fab6f916b506f06"; 

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherData = document.getElementById("weatherData");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        getWeather();
    }
});

async function getWeather(){

    const city = cityInput.value.trim();

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try{
        weatherData.innerHTML = `
            <div class="placeholder">
                <p>Loading...</p>
            </div>
        `;
        const response = await fetch(url);
        const data = await response.json();

        if(!response.ok){
            weatherData.innerHTML = `
                <div class="placeholder">
                    <h2>City Not Found</h2>
                    <p>Please try again.</p>
                </div>
            `;
            return;
        }

        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherData.innerHTML = `
            <div class="weather">

                <h2>${data.name}</h2>

                <img src="${icon}" alt="Weather Icon">

                <div class="temp">${Math.round(data.main.temp)}°C</div>

                <div class="desc">${data.weather[0].description}</div>
            </div>
        `;

    }
    catch(error){

        weatherData.innerHTML = `
            <div class="placeholder">
                <h2>Error</h2>
                <p>Unable to fetch weather.</p>
            </div>
        `;

        console.log(error);
    }

}