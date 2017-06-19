require('dotenv').config();
if (!process.env.SENTRY_TAG) {
  process.env.SENTRY_TAG = 'scrape';
}
require('./logger');
require('./scrape');
