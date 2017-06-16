const { request, GraphQLClient } = require('graphql-request');
const util = require('util');
const _ = require('lodash');
const ENDPOINT = 'https://api.graph.cool/simple/v1/swello-api';
const client = new GraphQLClient(ENDPOINT, { headers: {} });

const saveForecast = async parsed => {
  const {
    forecastLastUpdated,
    zoneId,
    forecastHazards,
    forecastPeriods,
    forecastSynopsis
  } = parsed;
  const query = `mutation {
    zoneForecast: createZoneForecast(
      forecastLastUpdated: "${new Date(forecastLastUpdated.dateTime).toISOString()}"
      zoneId: "${zoneId}"
      zoneForecastHazards: ${util.inspect(forecastHazards.hazards)}
      zoneForecastPeriods: ${util.inspect(forecastPeriods)}
      synopsis: "${forecastSynopsis}"
    ) {
      id
    }
  }`.replace(/'/g, '"');
  return await client.request(query);
};

module.exports = saveForecast;
