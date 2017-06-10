const _ = require('lodash');

function getForecasts($) {
  const labels = $('.row-forecast').map((i, el) => $(el).find('.forecast-label').text()).get();
  const text = $('.row-forecast').map((i, el) => $(el).find('.forecast-text').text()).get();
  return _.reduce(
    labels,
    (final, label, index) => {
      if (text[index]) {
        final.push({ label: label.trim(), text: text[index].trim() });
      }
      return final;
    },
    []
  );
}

module.exports = getForecasts;
