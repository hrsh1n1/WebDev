const apiKey = "337172ac686251e96799beed8eea786b";  

function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weather-info").innerHTML = "City not found!";
                return;
            }

            const weatherInfo = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weather-info").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("weather-info").innerHTML = "Error fetching data.";
        });
}
