const _ = require('lodash');
const getForecastLastUpdated = require('./getForecastLastUpdated');
const moment = require('moment');
const { weekdays, weekdaysShort, todayAliasesIsNightTime } = require('./utility');
const chrono = require('chrono-node');

function getForecastPeriods($) {
  const lastUpdated = getForecastLastUpdated($);
  const labels = $('.row-forecast')
    .map((i, el) => $(el).find('.forecast-label').text().trim())
    .get();
  const text = $('.row-forecast').map((i, el) => $(el).find('.forecast-text').text().trim()).get();
  return _.reduce(
    labels,
    (final, label, index) => {
      if (text[index]) {
        final.push({ label, forecastTime: getDateTime(label, lastUpdated), text: text[index] });
      }
      return final;
    },
    []
  );
}

function getDateTime(label, lastUpdated) {
  const stringToCheck = _.find(weekdaysShort, check => label.toUpperCase().indexOf(check) > -1)
    ? `${getThisOrNext(label, lastUpdated)} ${label}`.replace('Night', 'Afternoon')
    : label;
  return chrono.parseDate(stringToCheck, new Date(lastUpdated.dateTime));
}

function getThisOrNext(label, lastUpdated) {
  // does the day of week come before lastUpdated day of week ?
  // note: sunday comes before monday
  // if yes, then the forecast is for 'next' week
  // if no, then the forecast is for 'this' week
  return moment().day(label).day() < moment().day(lastUpdated.localDayOfWeek).day()
    ? 'next'
    : 'this';
}
module.exports = getForecastPeriods;
