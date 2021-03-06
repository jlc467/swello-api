// @flow
const chrono = require('chrono-node');
const _ = require('lodash');
const { weekdaysShort }: { weekdaysShort: Array<string> } = require('./utility');
const moment = require('moment');

export type forecastLastUpdated = null | {| dateTime: string, localDayOfWeek: string |};
function getForecastLastUpdated($: any): forecastLastUpdated {
  const lastUpdated = $('.marine-update-notice').text().replace('Last Update:', '').trim();
  const parts = chrono.parse(lastUpdated);
  if (_.size(parts)) {
    const dateTime = chrono.parseDate(`${parts[1].text} ${parts[0].text}`);
    return {
      dateTime,
      localDayOfWeek:
        _.find(weekdaysShort, d => lastUpdated.toUpperCase().indexOf(d) > -1) ||
          moment(dateTime).day()
    };
  }
  return null;
}

module.exports = getForecastLastUpdated;
