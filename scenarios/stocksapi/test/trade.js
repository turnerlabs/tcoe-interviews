var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

describe('stocks api', function () {
  describe('trades', function () {
    it('should be happy', async function () {
      return chai.request(app)
        .get('/api/stocks')
        .then(function (res) {
          expect(res).to.have.status(200);
        })
    });

    it('TC1: Verifying the request behaviour: with query param', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2000')
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('Object');
        })
    });

    it('TC2: Verifying the request behaviour: with null date in query param', async function () {
      return chai.request(app)
        .get('/api/stocks?date')
        .then(function (res) {
          expect(res).to.have.status(404);
        })
    });

    it('TC3: Verifying the response behaviour: validating the status and keys from the response', async function () {
      return chai.request(app)
        .get('/api/stocks?date')
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type','application/json; charset=utf-8');
          expect(res.body).to.contain.keys('date');
          expect(res.body).to.contain.keys('open');
          expect(res.body).to.contain.keys('high');
          expect(res.body).to.contain.keys('low');
          expect(res.body).to.contain.keys('close');
         
         
        })
    });

    it('TC4: Verifying the response behaviour: verifying the response data', async function () {
      const date='5-January-2000';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body).to.contain.keys('date');
          expect(res.body).to.contain.keys('open');
          expect(res.body).to.contain.keys('high');
          expect(res.body).to.contain.keys('low');
          expect(res.body).to.contain.keys('close');
          expect(res.body.date).to.eql(date);
          expect(res.body.open).to.not.be.null;
          expect(res.body.high).to.not.be.null;
          expect(res.body.low).to.not.be.null;
          expect(res.body.close).to.not.be.null; 
        })
    });

    /** Passing the date with trailing zero's */
    it('TC5: Verifying the request behavior does not work as intended: Date with trailing zeros', async function () {
      const date='05-January-2000';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(404);
          
        })
    });

    /** Passing the invalid date */
    it('TC6: Verifying the request behavior does not work as intended: Invalid date', async function () {
      const date='32-January-2000';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(404);
          
        })
    });

    it('TC7: Verifying tests for boundary based testing: valid date 1', async function () {
      const date='31-January-2000';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(200);
          
        })
    });
    it('TC8: Verifying tests for boundary based testing: valid date 2', async function () {
      const date='1-January-2000';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(200);
          
        })
    });
    it('TC9: Verifying tests for boundary based testing: invalid date', async function () {
      const date='0-January-2000';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(200);
          
        })
    });

    it('TC10: Verifying tests for boundary based testing: leap year date', async function () {
      const date='29-February-2000';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(404);
          
        })
    });

    it('TC11: Verifying negative tests: Non leap year', async function () {
      const date='29-February-2001';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(404);
          
        })
    });

    /** Passing month in the number format */
    it('TC12: Verifying negative tests: passing invalid date format', async function () {
      const date='28-02-2001';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(404);
          
        })
    });

    /** Passing date in mm-dd-yyyy in the number format */
    it('TC13: Verifying negative tests: passing invalid date format', async function () {
      const date='02-28-2001';
      return chai.request(app)
        .get(`/api/stocks?date=${date}`)
        .then(function (res) {
          expect(res).to.have.status(404);
          
        })
    });
    
  });
});