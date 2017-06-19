// @flow
const { request, GraphQLClient } = require('graphql-request');
const ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const client = new GraphQLClient(ENDPOINT, { headers: {} });

type allZones = {| id: string, zonePublicId: string |}[];
type getZonesResult = Promise<allZones>;
async function getZones(): getZonesResult {
  const query = `query {
    allZones {
      id
      zonePublicId
    }
  }`;
  const result = await client.request(query);
  return result.allZones || [];
}

module.exports = getZones;
