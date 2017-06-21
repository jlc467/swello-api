// @flow
const { request, GraphQLClient } = require('graphql-request');
const util = require('util');
const _ = require('lodash');
const ENDPOINT = process.env.GRAPHQL_ENDPOINT;
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

  const query = `mutation createZoneForecast($input: CreateZoneForecastInput!) {
      createZoneForecast(input: $input) {
        zoneForecast {
          id
        }
      }
    }`;

  const variables = {
    input: {
      clientMutationId: 'foo',
      forecastLastUpdated: new Date(forecastLastUpdated.dateTime).toISOString(),
      synopsis: forecastSynopsis,
      zoneId,
      zoneForecastHazards: forecastHazards.hazards,
      zoneForecastPeriods: forecastPeriods
    }
  };

  return await client.request(query, variables);
};

module.exports = saveForecast;
