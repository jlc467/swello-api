const _ = require('lodash');
const sentenceCase = require('sentence-case');
const HAZARD_TYPES = ['Small Craft Advisory', 'Gale Warning'];

function getForecastHazards($) {
  const hazards = $('[id=anchor-hazards]').map((i, el) => $(el).text()).get();
  return {
    hazards: setHazardTypes(hazards),
    hazardsBackup: getHazardsBackup($)
  };
}

function getHazardsBackup($) {
  const warningsNet = $('#detailed-forecast-body')
    .contents()
    .filter((i, el) => el.nodeType == 3)
    .map((i, el) => $(el).text().trim())
    .get();
  const start = _.findIndex(warningsNet, line => _.startsWith(line, '...'));
  const end = _.findLastIndex(warningsNet, line => _.endsWith(line, '...'));
  if (end === null) {
    return [];
  }
  const { warnings } = _.slice(warningsNet, start, end + 1).reduce(
    (final, line, index) => {
      if (_.startsWith(line, '...') === true && _.endsWith(line, '...') === true) {
        final.warnings.push(line);
        return final;
      }
      if (_.startsWith(line, '...') === true && _.endsWith(line, '...') === false) {
        final.start = index;
        return final;
      }
      if (_.startsWith(line, '...') === false && _.endsWith(line, '...') === true) {
        final.warnings.push(_.slice(warnings, final.start, index + 1).join(' '));
        return final;
      }
      return final;
    },
    { warnings: [], start: null }
  );
  return setHazardTypes(
    warnings.map(line => sentenceCase(_.slice(line, 3, line.length - 3).join('')))
  );
}

function setHazardTypes(hazards) {
  return _.map(hazards, hazardText => {
    const hazardTypeMatch = _.find(
      HAZARD_TYPES,
      t => hazardText.toUpperCase().indexOf(t.toUpperCase()) > -1
    );
    if (hazardTypeMatch) {
      return { type: hazardTypeMatch, text: hazardText };
    }
    return { type: null, text: hazardText };
  });
}

module.exports = getForecastHazards;
