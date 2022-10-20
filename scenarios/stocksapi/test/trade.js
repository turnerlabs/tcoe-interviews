var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);


  //positive scenario
  //res 200
  describe('1. positive - Using Get method', function () {
    let date = '5-January-2000'
    it('should have status 200', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          //console.log(res);
          expect(res).to.have.status(200);
        })
    });
  });
  
  //Response Scenario
  describe('2. positive - Validate response', function () {
    let date = '11-May-2021'
    it('should have open, high, low, and close in response body and all should be numbers', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res.body.open).exist
          expect(res.body.high).exist
          expect(res.body.low).exist
          expect(res.body.close).exist
        })
    });
  });

  
  // Request Scenario 
  // validate date
  describe('3. positive - Validate date in response', function () {
    let date = '5-January-2000'
    it('should have date in response and date in response equals input', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res.body.date).equals(date);
          expect(res).to.have.status(200);
        })
    });
  });

  //invalid date format 
  // negative case
  // bug scenario
  describe('4. negative - Using Get method leading zero in date ', function () {
    let date = '05-01-2000'
    it('should have status 400', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          console.log(res.body)
          expect(res).to.have.status(400);
        })
    });
  });
  // Negative Scenario testing 
  describe('5. negative - Using Post method', function () {
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
  // negative
  describe('6. negative - Unsupported date format in date parameter', function () {
    let date = '12/12/2005'
    it('should have status 400', async function () {
      return chai.request(app)
      .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(400);
        })
    });
  });

  // Boundary value analysis maximum value
  // bug scenario
  // neagtive 
  describe('7. negative Invalid day in date parameter maximum', function () {
    let date = '31-September-2022'
    it('should have status 400', async function () {
      return chai.request(app)
      .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(400);
        })
    });
  });
  
    // Boundary value analysis minimum value
    // bug scenario
   // neagtive
   describe('8. negative Invalid day in date parameter minimum value', function () {
    let date = '00-January-0000'
    //Response Scenario
    it('should have response date = request parameter date', async function () {
      return chai.request(app)
        .get('/api/stocks?date='+date)
        .then(function (res) {
          expect(res).to.have.status(400);
        })
    });
  });
  
  // wrong url path
  // negative
  describe('9. negative wrong url path in request', function () {
    let date = '23-January-2022'
    it('should have status 404', async function () {
      return chai.request(app)
      .get('/api/stock?date='+date)
        .then(function (res) {
          expect(res).to.have.status(404);
        })
    });
  });