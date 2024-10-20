const aggregateWeatherData = require('../utils/aggregateWeatherData');

const fetchWeatherData = async () => {
  await aggregateWeatherData();
};


setInterval(fetchWeatherData, 300000);


fetchWeatherData();