const StocksApi = require('../services/stocks.api');
const Utils = require('../../utils/data.test.creation');

var expect = require('chai').expect;

describe('stocks api', function () {
  describe('trades', function () {
    it('should be happy', async function () {
      const response = await StocksApi.getStocks();
      expect(response).to.have.status(200);
    });
  });

  describe('The request behavior works as intended', () => {
    it('Id 1 - Get ok without parameter', async () => {
      const response = await StocksApi.getStocks();
      expect(response).to.have.status(200);
    });
    it('Id 2 - Get ok with parameter', async () => {
      const date = await Utils.generateRandomDate();
      const response = await StocksApi.getStocks({ date: date });
      expect(response).to.have.status(200);
    });
  });

  describe('The response behavior works as intended - Without Parameter', () => {
    var response = '';
    it('Get status ok', async () => {
      response = await StocksApi.getStocks();
      expect(response).to.have.status(200);
    });
    it('Id 3 - Check fields of response', async () => {
      expect(response.body).to.have.all.keys('open', 'high', 'low', 'close');
    });
    it('Id 4 - Check values format', async () => {
      expect(response.body.open).to.be.a('number');
      expect(response.body.high).to.be.a('number');
      expect(response.body.low).to.be.a('number');
      expect(response.body.close).to.be.a('number');
    });
  })

  describe('The response behavior works as intended - With Parameter', () => {
    var response = '';
    it('Get status ok', async () => {
      const date = await Utils.generateRandomDate()
      response = await StocksApi.getStocks({ date: date });
      expect(response).to.have.status(200);
    });
    it('Id 5 - Check fields of response', async () => {
      expect(Object.keys(response.body).length).to.eql(5);
      expect(response.body).to.have.all.keys('date','open', 'high', 'low', 'close');
    })
  })

  describe('The request behavior does not work as intended', () => {
    it('Id 6 - Request with Leading zeroes in the day', async() => {
      const response = await StocksApi.getStocks({ date: '05-January-2000' });
      expect(response).to.have.status(400);
    });
    it('Id 7 - Request with empty date', async() => {
      const response = await StocksApi.getStocks({ date: '' });
      expect(response).to.have.status(400);
    });
  })

  describe('Test case that demonstrates boundary based testing', () => {
    it('Id 8 - Request with Leap Day', async() => {
      const response = await StocksApi.getStocks({ date: '29-February-2020' });
      expect(response).to.have.status(200);
    });
    it('Id 9 - Request with First day of a year', async() => {
      const response = await StocksApi.getStocks({ date: '1-January-2022' });
      expect(response).to.have.status(200);
    });
    it('Id 10 - Request with Last day of a year', async() => {
      const response = await StocksApi.getStocks({ date: '1-January-2022' });
      expect(response).to.have.status(200);
    });
    it('Id 11 - Request with a non Leap Day', async() => {
      const response = await StocksApi.getStocks({ date: '29-February-2022' });
      expect(response).to.have.status(400);
    });
  })

  describe('Negative test cases', () => {
    it('Id 12 - Request with a string value', async() => {
      const response = await StocksApi.getStocks({ date: 'hello world' });
      expect(response).to.have.status(400);
    });
    it('Id 13 - Characters not allowed', async() => {
      const response = await StocksApi.getStocks({ date: '$**%!' });
      expect(response).to.have.status(400);
    });
    it('Id 14 - Date that does not exist', async() => {
      const response = await StocksApi.getStocks({ date: '30-February-2022' });
      expect(response).to.have.status(400);
    });
  })

});