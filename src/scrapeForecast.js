const cheerio = require('cheerio');

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
  //console.log(result);
  return result;
};

//scrapeForecast(cheerio.load(require('./__tests__/mocks/mock.ForecastHTML')));

module.exports = scrapeForecast;
