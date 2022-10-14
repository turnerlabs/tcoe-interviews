var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);

describe('STOCKS API - REQUEST Validation', function () {

  // Request Scenario
  describe('Using Get method', function () {
    let date = '5-January-2000'
    it('should have status 200', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(200);
        })
    });
  });
  
  // Request Scenario
  describe('Valid date parameter', function () {
    let date = '5-January-2000'
    it('should have status 200', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(200);
        })
    });
  });

  // Negative Scenario
  describe('Using Post method', function () {
    let date = '5-January-2000'
    it('should have status 404', async function () {
      return chai.request(app)
        .post('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(404);
        })
    });
  });

  // Bug Scenario
  describe('Leading zeros in date parameter', function () {
    let date = '03-February-2022'
    it('should have status 400', async function () {
      return chai.request(app)
      .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(400);
        })
    });
  });

  // Bug Scenario
  describe('Unsupported date format in date parameter', function () {
    let date = '12/12/2005'
    it('should have status 400', async function () {
      return chai.request(app)
      .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(400);
        })
    });
  });

  // Boundary Test
  describe('Invalid day in date parameter', function () {
    let date = '31-February-2022'
    it('should have status 400', async function () {
      return chai.request(app)
      .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(400);
        })
    });
  });

  // Boundary Test
  describe('Invalid day in date parameter', function () {
    let date = '00-February-2022'
    it('should have status 400', async function () {
      return chai.request(app)
      .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(400);
        })
    });
  });
});


describe('STOCKS API - RESPONSE Validation', function () {
  
  //Response Scenario
  describe('Valid request', function () {
    let date = '15-December-2021'
    it('should have date, open, high, low, and close in response body', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res.body).to.have.property('date')
          expect(res.body).to.have.property('open')
          expect(res.body).to.have.property('high')
          expect(res.body).to.have.property('low')
          expect(res.body).to.have.property('close')
        })
    });

    //Response Scenario
    it('should have response date = request parameter date', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res.body.date).to.eql(date)
        })
    });
  });

});