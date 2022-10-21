var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);
var stocksData = require('../resources/stocksData')

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

var reqHandler;

describe('stocks api', function () {

  beforeEach(() => {
    reqHandler = chai.request(app);
  });

  describe('trades', function () {

    it('should be happy', async function () {
      const res = await reqHandler.get('/api/stocks')
      expect(res).to.have.status(200);
    });
  });


  // tests for request behaviour
  describe('verify request behaviour', ()=> {

    it('TC1: valid query parameter', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.validDate}`)
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('Object');
   });

    it('TC2: empty query parameter', async () => {
      const res = await reqHandler.get("/api/stocks?date=''")
      expect(res).to.have.status(404);
    });
  });


  // tests for response behaviour
  describe('verify response behaviour', ()=> {

    it('TC1: validate response structure and status', async () => {
      const res = await reqHandler.get('/api/stocks?date')
      expect(res).to.have.status(200);
      expect(res.headers['content-type']).to.have.string('application/json');
      expect(res.body).to.have.keys(stocksData.responseKeys);
    });

    it('TC2: verify response data', async ()=> {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.validDate}`)
      expect(res).to.have.status(200);
      expect(res.body).to.have.keys(stocksData.responseKeys);
      expect(res.body.date).to.eql(stocksData.validDate);
      expect(res.body.open).to.not.be.null;
      expect(res.body.high).to.not.be.null;
      expect(res.body.low).to.not.be.null;
      expect(res.body.close).to.not.be.null; 
    });
  });
  
  // tests for request behavior does not work as intended 
  describe('Verify request behavior does not work as intended', ()=> {
    it('TC1: Date with trailing zeros', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.trailingZerosDate}`)
      expect(res).to.have.status(404);
   });

    it('TC2: Invalid date', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.invalidDate}`)
      expect(res).to.have.status(404);
    });
  });

  // tests for boundary values
  describe('boundary Value Test', ()=> {
    it('TC1: valid Boundary Start date', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.validBoundaryStartDate}`)
      expect(res).to.have.status(200);
      expect(res.body).to.have.keys(stocksData.responseKeys);
      expect(res.body.date).to.eql(stocksData.validBoundaryStartDate);
   });

    it('TC2: valid Boundary End date', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.validBoundaryEndDate}`)
      expect(res).to.have.status(200);
      expect(res.body).to.have.keys(stocksData.responseKeys);
      expect(res.body.date).to.eql(stocksData.validBoundaryEndDate);
    });

    it('TC3: valid Boundary leap year date', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.leapYearBoundaryDate}`)
      expect(res).to.have.status(200);
      expect(res.body).to.have.keys(stocksData.responseKeys);
      expect(res.body.date).to.eql(stocksData.leapYearBoundaryDate);
    });

    it('TC4: invalid Boundary Start date', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.invalidBoundaryStartDate}`)
      expect(res).to.have.status(404);
    });
  
    it('TC5: invalid Boundary End date', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.invalidBoundaryEndDate}`)
      expect(res).to.have.status(404);
    });
  });

  // negative tests
  describe('negative tests for stocks api', ()=> {
    it('TC1: invalid date format', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.invalidFromatDate}`)
      expect(res).to.have.status(404);
    });

    it('TC2: not leap year date', async () => {
      const res = await reqHandler.get(`/api/stocks?date=${stocksData.notLeapYearDate}`)
      expect(res).to.have.status(404);
    });
  });
});
  