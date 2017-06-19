// @flow
const chrono = require('chrono-node');
const _ = require('lodash');

export type forecastSynopsis = null | string;
function getForecastSynopsis($: any): forecastSynopsis {
  const match = _.get(
    $('#detailed-forecast-body').find('div strong').filter((i, el) => $(el).text() === 'Synopsis'),
    '[0].next.data',
    ''
  ).trim();
  if (match) {
    return _.startsWith(match, ':') ? match.substring(1).trim() : match;
  }
  return null;
}

module.exports = getForecastSynopsis;
