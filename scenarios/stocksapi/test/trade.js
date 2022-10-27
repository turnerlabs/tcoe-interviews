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
  });

  describe('api/stocks', function () {
    it('should return status code 200 when sending a date in the format d-mmmm-yyyy as a query parameter', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2001')
        .then(function (res) {
          expect(res).to.have.status(200);
        })
    });

    it('should return 404 status code with a "POST" request as that method is not defined', async function () {
      return chai.request(app)
        .post('/api/stocks?date=5-January-2001')
        .then(function (res) {
          expect(res).to.have.status(404);
        })
    });

    it('should contain the properties("open", "high", "low" and "close") in the response body (Object)', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2001')
        .then(function (res) {
          expect(res.body).to.be.an("object")
          expect(res.body).to.have.property("open");
          expect(res.body).to.have.property("high");
          expect(res.body).to.have.property("low");
          expect(res.body).to.have.property("close");
        });
    });

    it('should return the same date that is sent as a query parameter', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2001')
        .then(function (res) {
          expect(res.body).to.have.property("date").eql("5-January-2001")
        });
    });

    it('should return 400 status code when sending an empty date as a query parameter as it should be needed to get the stock information', async function () {
      return chai.request(app)
        .get('/api/stocks?date=')
        .then(function (res) {
          expect(res).to.have.status(400);
        });
    });

    it('should return 400 status code when no query parameter is sent as it should be needed to get the stock information', async function () {
      return chai.request(app)
        .get('/api/stocks/')
        .then(function (res) {
          expect(res).to.have.status(400);
        });
    });

    it('should return 400 status code when sending a date format other than d-mmmm-yyyy', async function () {
      return chai.request(app)
        .get('/api/stocks?date=05-January-2001')
        .then(function (res) {
          expect(res).to.have.status(400);
        });
    });

    it('should return status code 400 when sending data that is not in date format', async function () {
      return chai.request(app)
        .get('/api/stocks/?date=testing')
        .then(function (res) {
          expect(res).to.have.status(400);
        });
    });
  });
});