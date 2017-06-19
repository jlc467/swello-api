// @flow
const _ = require('lodash');
const saveForecast = require('./saveForecast');
const scrapeForecast = require('./scrapeForecast');
const cheerio = require('cheerio');
const getForecastHTML = require('./getForecastHTML');
const getZones = require('./getZones');
const parallel = require('async-await-parallel');
const saveAllForecasts = async () => {
  console.time(`saveAllForecasts`);
  const allZones = await getZones();
  await parallel(
    _.map(allZones, ({ zonePublicId, id }) => async () => {
      const forecastHTML = await getForecastHTML(zonePublicId);
      if (!forecastHTML) {
        console.warn('Skipping forecast, no HTML found', zonePublicId);
        return;
      }
      const parsed = scrapeForecast(cheerio.load(forecastHTML));
      console.info('Saving forecast', zonePublicId);
      console.time(`saveForecast ${zonePublicId}`);
      const forecastId = await saveForecast(parsed, id);
      //console.log(JSON.stringify(parsed, null, 2));
      console.log('Saved forecast', forecastId);
      console.timeEnd(`saveForecast ${zonePublicId}`);
      console.log(forecastId);
    }),
    5
  );
  console.timeEnd(`saveAllForecasts`);
};

saveAllForecasts().catch(e => console.error('error', e));
