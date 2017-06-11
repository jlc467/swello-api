const cheerio = require('cheerio');
const $ = cheerio.load(require('./mockForecastHTML'));
const getForecastHazards = require('./getForecastHazards');
const getForecastLastUpdated = require('./getForecastLastUpdated');
const getForecastSynopsis = require('./getForecastSynopsis');
const getForecastPeriods = require('./getForecastPeriods');
console.log(getForecastHazards($));
console.log(getForecastLastUpdated($));
console.log(getForecastSynopsis($));
console.log(getForecastPeriods($));
