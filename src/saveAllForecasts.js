const _ = require('lodash');
const saveForecast = require('./saveForecast');
const scrapeForecast = require('./scrapeForecast');
const read = require('node-read');
const cheerio = require('cheerio');
const getZones = require('./getZones');

const saveAllForecasts = async () => {
  const { allZones } = await getZones();
  for (let zone of allZones) {
    const { zonePublicId, id } = zone;
    const forecastHTML = await getForecast(zonePublicId);
    const parsed = scrapeForecast(cheerio.load(forecastHTML));
    parsed.zoneId = id;
    console.log('attempting to save forecast', zonePublicId);
    console.time('saveForecast');
    await saveForecast(parsed);
    console.log('saved', zonePublicId);
    console.timeEnd('saveForecast');
  }
};

saveAllForecasts().catch(e => console.error('error', e));

function getForecast(zoneId) {
  console.log('fetching forecast html');
  console.time('getForecast');
  return new Promise((resolve, reject) => {
    read(`http://marine.weather.gov/MapClick.php?zoneid=${zoneId}`, (err, forecast, res) => {
      console.log('got html', zoneId);
      console.timeEnd('getForecast');
      return resolve(forecast.html);
    });
  });
}
