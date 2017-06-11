const chrono = require('chrono-node');

function getForecastLastUpdated($) {
  const lastUpdated = $('.marine-update-notice').text().replace('Last Update:', '').trim();
  return chrono.parseDate(lastUpdated);
}

module.exports = getForecastLastUpdated;
