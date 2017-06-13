const cheerio = require('cheerio');
const getForecastHazards = require('../getForecastHazards');
const getForecastLastUpdated = require('../getForecastLastUpdated');
const getForecastSynopsis = require('../getForecastSynopsis');
const getForecastPeriods = require('../getForecastPeriods');
const scrapeForecast = require('../scrapeForecast');
let $ = null;

describe('forecast scrape', () => {
  beforeEach(() => {
    $ = cheerio.load(require('./mocks/mock.ForecastHTML'));
  });

  it('returns last updated', () => {
    const result = getForecastLastUpdated($);
    expect(result).toMatchSnapshot();
  });

  it('returns hazards', () => {
    const result = getForecastHazards($);
    expect(result).toMatchSnapshot();
  });

  it('returns forecast periods', () => {
    const result = getForecastPeriods($);
    expect(result).toMatchSnapshot();
  });

  it('returns forecast synopsis', () => {
    const result = getForecastSynopsis($);
    expect(result).toMatchSnapshot();
  });

  it('returns full forecast', () => {
    const result = scrapeForecast($);
    expect(result).toMatchSnapshot();
  });
});
