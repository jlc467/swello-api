// @flow
const _ = require('lodash');
const getForecastLastUpdated = require('./getForecastLastUpdated');
const moment = require('moment');
const { weekdaysShort, todayAliasesIsNightTime } = require('./utility');
const chrono = require('chrono-node');

type period = {| label: string, forecastTime: string | null, text: string |};
export type forecastPeriods = period[];
function getForecastPeriods($: any): forecastPeriods {
  const lastUpdated = getForecastLastUpdated($);
  const labels = $('.row-forecast')
    .map((i, el) => $(el).find('.forecast-label').text().trim())
    .get();
  const text = $('.row-forecast').map((i, el) => $(el).find('.forecast-text').text().trim()).get();
  return labels.reduce((final, label, index) => {
    if (text[index]) {
      final.push({
        label,
        forecastTime: lastUpdated ? new Date(getDateTime(label, lastUpdated)).toISOString() : null,
        text: text[index]
      });
    }
    return final;
  }, []);
}

function getDateTime(label, lastUpdated): string {
  const stringToCheck = _.find(weekdaysShort, check => label.toUpperCase().indexOf(check) > -1)
    ? `${getThisOrNext(label, lastUpdated)} ${label}`.replace('Night', 'Afternoon')
    : label;
  return chrono.parseDate(stringToCheck, new Date(lastUpdated.dateTime));
}

function getThisOrNext(label, lastUpdated): string {
  // does the day of week come before lastUpdated day of week ?
  // note: sunday comes before monday
  // if yes, then the forecast is for 'next' week
  // if no, then the forecast is for 'this' week
  return moment().day(label).day() < moment().day(lastUpdated.localDayOfWeek).day()
    ? 'next'
    : 'this';
}
module.exports = getForecastPeriods;
