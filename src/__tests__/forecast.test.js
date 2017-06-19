const cheerio = require('cheerio');
const getForecastHazards = require('../scrape/getForecastHazards');
const getForecastLastUpdated = require('../scrape/getForecastLastUpdated');
const getForecastSynopsis = require('../scrape/getForecastSynopsis');
const getForecastPeriods = require('../scrape/getForecastPeriods');
let toScrape = null;
describe('forecast scrape', () => {
  beforeEach(() => {
    toScrape = require('./mocks/mockForecasts').map(html => cheerio.load(html));
  });

  it('returns last updated', () => {
    const result = toScrape.map($ => getForecastLastUpdated($));
    expect(result).toMatchSnapshot();
  });

  it('returns hazards', () => {
    const result = toScrape.map($ => getForecastHazards($));
    expect(result).toMatchSnapshot();
  });

  it('returns forecast periods', () => {
    const result = toScrape.map($ => getForecastPeriods($));
    expect(result).toMatchSnapshot();
  });

  it('returns forecast synopsis', () => {
    const result = toScrape.map($ => getForecastSynopsis($));
    expect(result).toMatchSnapshot();
  });
});
