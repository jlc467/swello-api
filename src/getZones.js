const { request, GraphQLClient } = require('graphql-request');

const ENDPOINT = 'https://api.graph.cool/simple/v1/swello-api';
const client = new GraphQLClient(ENDPOINT, { headers: {} });

const getZones = async () => {
  const query = `query {
    allZones {
      id
      zonePublicId
    }
  }`;
  const result = await client.request(query);
  return result;
};

module.exports = getZones;
