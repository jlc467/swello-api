// @flow
require('dotenv').config();
const { request, GraphQLClient } = require('graphql-request');
const ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const client = new GraphQLClient(ENDPOINT, { headers: {} });

type zone = {| name: string, zonePublicId: string |};
const createZone = async (zone: zone) => {
  const { name, zonePublicId } = zone;

  const query = `mutation {
    zone: createZone(
      zonePublicId: "${zonePublicId}"
      name: "${name}"
    ) {
      id
    }
  }`;
  const result = await client.request(query);
  return result.zone.id;
};

const createZones = async (rawZones: {| value: zone |}[]) => {
  return await Promise.all(rawZones.map(zone => createZone(zone.value)));
};

const main = async () => {
  const rawZones = require('./zones.json');
  // create zones
  const zoneIds = await createZones(rawZones);
  console.log(`Created ${zoneIds.length} zones`);
};

main().catch(e => console.error(e));
