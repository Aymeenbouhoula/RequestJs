document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const location = data.name;
            document.getElementById('weatherResult').innerHTML = 
                `<h2>${location}</h2>
                 <p>${temp} °C</p>
                 <p>${description}</p>`;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = 
                `<p>${error.message}</p>`;
        });
});
