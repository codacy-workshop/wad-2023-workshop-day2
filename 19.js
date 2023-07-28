function determineWeatherCondition(weatherData) {
  let temp = "Cool";
  if (weatherData.temperature > 30) temp = "Hot";
  let humidity = "dry";
  if (weatherData.humidity > 80) humidity = "humid";

  let wind = "light breeze";
  if (weatherData.windSpeed > 10) wind = "strong wind";
  return `${temp} and ${humidity} with ${wind}.`;
}

// Example
const weatherData = {
  temperature: 32,
  humidity: 85,
  windSpeed: 15,
};

const weatherCondition = determineWeatherCondition(weatherData);
console.log(weatherCondition);
