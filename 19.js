function determineWeatherCondition(weatherData) {
    let weatherCondition;
    if (weatherData.temperature > 30) {
        weatherCondition = "Hot";
    } else {
        weatherCondition = "Cool";
    }
    if (weatherData.humidity > 80) {
        weatherCondition += " and humid";
    } else {
        weatherCondition += " and dry";
    }
    if (weatherData.windSpeed < 10) {
        weatherCondition += " with light breeze.";
    } else {
        weatherCondition += " with strong wind.";
    }
    return weatherCondition;
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
