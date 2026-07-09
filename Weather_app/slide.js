const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

weatherData.innerHTML = `
<div class="weather-card">

    <h2>${data.name}, ${data.sys.country}</h2>

    <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="${data.weather[0].description}"
    >

    <h1>${Math.round(data.main.temp)}°C</h1>

    <h3>${data.weather[0].main}</h3>

    <p>${data.weather[0].description}</p>

    <div class="weather-details">

        <div class="detail">
            <span>🤗 Feels Like</span>
            <strong>${Math.round(data.main.feels_like)}°C</strong>
        </div>

        <div class="detail">
            <span>💧 Humidity</span>
            <strong>${data.main.humidity}%</strong>
        </div>

        <div class="detail">
            <span>🌬️ Wind</span>
            <strong>${data.wind.speed} m/s</strong>
        </div>

        <div class="detail">
            <span>📈 Pressure</span>
            <strong>${data.main.pressure} hPa</strong>
        </div>

        <div class="detail">
            <span>👁️ Visibility</span>
            <strong>${(data.visibility / 1000).toFixed(1)} km</strong>
        </div>

        <div class="detail">
            <span>🌅 Sunrise</span>
            <strong>${sunrise}</strong>
        </div>

        <div class="detail">
            <span>🌇 Sunset</span>
            <strong>${sunset}</strong>
        </div>

        <div class="detail">
            <span>📍 Coordinates</span>
            <strong>${data.coord.lat}, ${data.coord.lon}</strong>
        </div>

    </div>

</div>
`;