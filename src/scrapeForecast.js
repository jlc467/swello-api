const cheerio = require('cheerio');
const _ = require('lodash');
const getForecastHazards = require('./getForecastHazards');
const getForecastLastUpdated = require('./getForecastLastUpdated');
const getForecastSynopsis = require('./getForecastSynopsis');
const getForecastPeriods = require('./getForecastPeriods');

const scrapeForecast = $ => {
  const result = {
    forecastHazards: getForecastHazards($),
    forecastLastUpdated: getForecastLastUpdated($),
    forecastSynopsis: getForecastSynopsis($),
    forecastPeriods: getForecastPeriods($)
  };
  console.log(result);
  return result;
};

_.each(require('./__tests__/mocks/mockForecasts'), f => {
  scrapeForecast(cheerio.load(f));
});

module.exports = scrapeForecast;
