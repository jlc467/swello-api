// @flow
const read = require('node-read');

function getForecastHTML(zoneId: string): Promise<null | string> {
  console.info('Fetching forecast html', zoneId);
  console.time(`getForecastHTML ${zoneId}`);
  return new Promise((resolve, reject) => {
    read(`http://marine.weather.gov/MapClick.php?zoneid=${zoneId}`, (err, forecast, res) => {
      if (err || !forecast || !forecast.html) {
        console.error('Error getting forecast html', err || 'No response error found', zoneId);
        return resolve(null);
      }
      console.timeEnd(`getForecastHTML ${zoneId}`);
      return resolve(forecast.html);
    });
  });
}

module.exports = getForecastHTML;
