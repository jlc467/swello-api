const { request, GraphQLClient } = require('graphql-request');
const util = require('util');
const _ = require('lodash');
const ENDPOINT = 'https://api.graph.cool/simple/v1/swello-api';
const client = new GraphQLClient(ENDPOINT, { headers: {} });

const saveForecast = async (
  forecastLastUpdated,
  zoneId,
  zoneForecastHazards = [],
  zoneForecastPeriods = [],
  synopsis = ''
) => {
  const query = `mutation {
    zoneForecast: createZoneForecast(
      forecastLastUpdated: "${forecastLastUpdated}"
      zoneId: "${zoneId}"
      zoneForecastHazards: ${util.inspect(zoneForecastHazards)}
      zoneForecastPeriods: ${util.inspect(zoneForecastPeriods)}
      synopsis: "${synopsis}"
    ) {
      id
    }
  }`.replace(/'/gi, '"');
  const result = await client.request(query);
  console.log(result);
  return result;
};

// saveForecast(
//   '2017-06-15T22:26:17.263Z',
//   'cj3thkffip0a40198e0l1xewo',
//   [{ hazardText: 'small craft beware' }],
//   [{ text: '2-3 ft choppy', forecastTime: '2017-06-15T22:26:17.263Z' }],
//   'stay safe, friendo'
// ).catch(e => console.error(e));

module.exports = saveForecast;
