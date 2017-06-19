const util = require('util');
const winston = require('winston');
const logger = new winston.Logger();
const Sentry = require('winston-sentry');
console.log('env', process.env.NODE_ENV);

switch ((process.env.NODE_ENV || '').toLowerCase()) {
  case 'production':
    logger.add(Sentry, {
      patchGlobal: true,
      level: 'warn',
      dsn: process.env.SENTRY_DSN,
      tags: { key: process.env.SENTRY_TAG || 'no-tag' }
    });
    logger.add(winston.transports.Console, {
      colorize: true,
      timestamp: true,
      level: 'info'
    });
    break;
  case 'test':
    // Don't set up the logger overrides
    return;
  default:
    logger.add(winston.transports.Console, {
      colorize: true,
      timestamp: true,
      level: 'info'
    });
    break;
}

function formatArgs(args) {
  return [util.format.apply(util.format, Array.prototype.slice.call(args))];
}

console.log = function() {
  logger.info.apply(logger, formatArgs(arguments));
};
console.info = function() {
  logger.info.apply(logger, formatArgs(arguments));
};
console.warn = function() {
  logger.warn.apply(logger, formatArgs(arguments));
};
console.error = function() {
  logger.error.apply(logger, formatArgs(arguments));
};
console.debug = function() {
  logger.debug.apply(logger, formatArgs(arguments));
};
