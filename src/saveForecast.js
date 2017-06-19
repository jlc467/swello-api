// @flow
const { request, GraphQLClient } = require('graphql-request');
const util = require('util');
const _ = require('lodash');
const ENDPOINT = 'https://api.graph.cool/simple/v1/swello-api';
const client = new GraphQLClient(ENDPOINT, { headers: {} });
import type { forecastLastUpdated } from './getForecastLastUpdated';
import type { forecastHazards } from './getForecastHazards';
import type { forecastPeriods } from './getForecastPeriods';
import type { forecastSynopsis } from './getForecastSynopsis';
type parsed = {|
  forecastLastUpdated: forecastLastUpdated,
  forecastHazards: forecastHazards,
  forecastPeriods: forecastPeriods,
  forecastSynopsis: forecastSynopsis
|};
const saveForecast = async (parsed: parsed, zoneId: string): Promise<null | { id: string }> => {
  const { forecastLastUpdated, forecastHazards, forecastPeriods, forecastSynopsis } = parsed;
  if (!forecastLastUpdated || !forecastLastUpdated.dateTime) {
    console.error('Unable to scrape forecast last updated', zoneId);
    return null;
  }
  const query = `mutation {
    zoneForecast: createZoneForecast(
      forecastLastUpdated: "${new Date(forecastLastUpdated.dateTime).toISOString()}"
      zoneId: "${zoneId}"
      zoneForecastHazards: ${util.inspect(forecastHazards.hazards)}
      zoneForecastPeriods: ${util.inspect(forecastPeriods)}
      synopsis: "${forecastSynopsis || ''}"
    ) {
      id
    }
  }`.replace(/'/g, '"');
  const result = await client.request(query);
  return result;
};

module.exports = saveForecast;
