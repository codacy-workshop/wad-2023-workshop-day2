function determineWeatherCondition(weatherData) {
    let message = ""
    if (weatherData.temperature > 30 ) {
        message += "Hot and ";
    } else {
        message += "Cool and ";
    }

    if (weatherData.humidity > 80) {
        message += "humid ";
    } else {
        message += "dry ";
    }

    if (weatherData.windSpeed < 10) {
        message += "with light breeze.";
    }
    else{
        message += "with strong wind.";
    }
    
    return message;
}

// Example
const weatherData = {
    temperature: 32,
    humidity: 85,
    windSpeed: 15
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
