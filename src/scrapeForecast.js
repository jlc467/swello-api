//@flow
const getForecastHazards = require('./getForecastHazards');
const getForecastLastUpdated = require('./getForecastLastUpdated');
const getForecastSynopsis = require('./getForecastSynopsis');
const getForecastPeriods = require('./getForecastPeriods');

const scrapeForecast = ($: any) => ({
  forecastLastUpdated: getForecastLastUpdated($),
  forecastHazards: getForecastHazards($),
  forecastSynopsis: getForecastSynopsis($),
  forecastPeriods: getForecastPeriods($)
});

module.exports = scrapeForecast;
