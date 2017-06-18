// @flow
const _ = require('lodash');
const saveForecast = require('./saveForecast');
const scrapeForecast = require('./scrapeForecast');
const read = require('node-read');
const cheerio = require('cheerio');
const getZones = require('./getZones');
const parallel = require('async-await-parallel');
const saveAllForecasts = async () => {
  console.time(`saveAllForecasts`);
  const allZones = await getZones();

  await parallel(
    _.map(allZones, ({ zonePublicId, id }) => async () => {
      const forecastHTML = await getForecast(zonePublicId);
      const parsed = scrapeForecast(cheerio.load(forecastHTML));
      parsed.zoneId = id;
      console.log('attempting to save forecast', zonePublicId);
      console.time(`saveForecast ${zonePublicId}`);
      await saveForecast(parsed);
      //console.log(JSON.stringify(parsed, null, 2));
      console.log('saved', zonePublicId);
      console.timeEnd(`saveForecast ${zonePublicId}`);
    }),
    5
  );
  console.timeEnd(`saveAllForecasts`);
};

saveAllForecasts().catch(e => console.error('error', e));

function getForecast(zoneId: string): Promise<string> {
  console.log('fetching forecast html');
  console.time(`getForecast ${zoneId}`);
  return new Promise((resolve, reject) => {
    read(`http://marine.weather.gov/MapClick.php?zoneid=${zoneId}`, (err, forecast, res) => {
      console.log('got html', zoneId);
      console.timeEnd(`getForecast ${zoneId}`);
      return resolve(forecast.html);
    });
  });
}
