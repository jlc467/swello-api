### TODO server code for [swello](https://github.com/jlc467/swello)
- [x] scrape [html](http://marine.weather.gov/MapClick.php?zoneid=PZZ673) instead of [txt](http://tgftp.nws.noaa.gov/data/forecasts/marine/coastal/pz/pzz673.txt)
- [ ] persist scraped forecasts on [graph.cool](https://www.graph.cool/)
- [ ] update [swello](https://github.com/jlc467/swello) to use GraphQL API
- [ ] highlight zones with hazards on map


### How to use
**1. Create .env file in root with**
```bash
NODE_ENV="production"
SENTRY_DSN="sentry DSN key found under project settings"
GRAPHQL_ENDPOINT="graphql endpoint"
```

**2. Install dependencies**
```bash
yarn
```

**3. Run**
```bash
yarn test-watch #start jest in watch mode
yarn test-update #update jest snapshots
yarn scrape #scrape all forecasts and save them
```
