function determineWeatherCondition(weatherData) {
    let temperature;
    if (weatherData.temperature > 30) { temperature =  "Hot" } else { temperature = "Cold" }
    let humidity;
    if (weatherData.humidity > 80) { humidity = "humid" } else { humidity = "dry" }
    let windSpeed;
    if (weatherData.windSpeed < 10) { windSpeed = "light breeze" } else { windSpeed = "strong wind" }

    return `${temperature} and ${humidity} with ${windSpeed}.`;
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
