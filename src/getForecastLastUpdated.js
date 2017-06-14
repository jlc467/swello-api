const chrono = require('chrono-node');
const _ = require('lodash');
const { weekdaysShort } = require('./utility');

function getForecastLastUpdated($) {
  const lastUpdated = $('.marine-update-notice').text().replace('Last Update:', '').trim();
  const parts = chrono.parse(lastUpdated);
  if (_.size(parts)) {
    return {
      dateTime: chrono.parseDate(`${parts[1].text} ${parts[0].text}`),
      localDayOfWeek: _.find(weekdaysShort, d => lastUpdated.toUpperCase().indexOf(d) > -1)
    };
  }
  return null;
}

module.exports = getForecastLastUpdated;
