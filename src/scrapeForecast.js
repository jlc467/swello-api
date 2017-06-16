const cheerio = require('cheerio');
const _ = require('lodash');
const getForecastHazards = require('./getForecastHazards');
const getForecastLastUpdated = require('./getForecastLastUpdated');
const getForecastSynopsis = require('./getForecastSynopsis');
const getForecastPeriods = require('./getForecastPeriods');

const scrapeForecast = $ => {
  const result = {
    forecastLastUpdated: getForecastLastUpdated($),
    forecastHazards: getForecastHazards($),
    forecastSynopsis: getForecastSynopsis($),
    forecastPeriods: getForecastPeriods($)
  };
  return result;
};

module.exports = scrapeForecast;
