const { request, GraphQLClient } = require('graphql-request');

const ENDPOINT = 'https://api.graph.cool/simple/v1/swello-api';
const client = new GraphQLClient(ENDPOINT, { headers: {} });

const createZone = async zone => {
  const { name, zonePublicId } = zone.value;

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

const createZones = async rawZones => {
  return await Promise.all(rawZones.map(createZone));
};

const main = async () => {
  const rawZones = require('./zones.json');

  // create zones
  const zoneIds = await createZones(rawZones);
  console.log(`Created ${zoneIds.length} zones`);
};

main().catch(e => console.error(e));
