// @flow
const { request, GraphQLClient } = require('graphql-request');
const ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const client = new GraphQLClient(ENDPOINT, { headers: {} });
const _ = require('lodash');
type allZones = {| id: string, zonePublicId: string |}[];
type getZonesResult = Promise<allZones>;
async function getZones(): getZonesResult {
  const query = `query {
    viewer {
      allZones {
        edges {
          node {
            id
            zonePublicId
          }
        }
      }
    }
  }`;
  const result = await client.request(query);
  return _.get(result, 'viewer.allZones.edges', []).map(({ node }) => node);
}

module.exports = getZones;
