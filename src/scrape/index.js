require('dotenv').config();
if (!process.env.SENTRY_TAG) {
  process.env.SENTRY_TAG = 'scrape';
}
require('../logger');
const _ = require('lodash');
const saveAllForecasts = require('./saveAllForecasts');
const saveAllForecastsThrottled = _.throttle(saveAllForecasts, 600000); // 10 throttle
setInterval(() => {
  saveAllForecastsThrottled().catch(e => console.error('error', e));
}, 1000);
