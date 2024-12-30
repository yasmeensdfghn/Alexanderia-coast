const API_KEY = 'your_openweather_api_key';
const beaches = [
    { name: "Montazah", lat: 31.2185, lon: 29.9631 },
    { name: "Stanley", lat: 31.2156, lon: 29.9370 },
    { name: "Miami", lat: 31.2515, lon: 29.9704 }
];

const beachContainer = document.getElementById('beaches');

beaches.forEach(beach => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${beach.lat}&lon=${beach.lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const beachElement = document.createElement('div');
            beachElement.innerHTML = `
                <h3>${beach.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            beachContainer.appendChild(beachElement);
        })
        .catch(error => console.error('Error fetching weather:', error));
});
