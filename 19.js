function determineWeatherCondition(weatherData) {
            if (weatherData.windSpeed < 10) {
                return "Hot and humid with light breeze.";
            } else {
                return "Hot and humid with strong wind.";
            }
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
