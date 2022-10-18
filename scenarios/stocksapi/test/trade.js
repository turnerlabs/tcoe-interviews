var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

describe('stocks api', function () {
  describe('trades', function () {
    it('verify the response code is 200', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2000')
        .then(function (res) {
          expect(res).to.have.status(200);
        })
    });
    it('print the response', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2000')
        .then(function (res) {
          console.log(res.body);
        })
    });
    it('try to print the response for the date 35, which is a boundary based testing', async function () {
      return chai.request(app)
        .get('/api/stocks?date=35-January-2000')
        .then(function (res) {
          console.log(res.body);
        })
    });
    it('try to print the response for the year 2023, which is a bug', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2023')
        .then(function (res) {
          console.log(res.body);
        })
    });
    it('replace the query parameter with / and response should be null', async function () {
      return chai.request(app)
        .get('/api/stocks/date=35-January-2000')
        .then(function (res) {
          console.log(res.body);
        })
    });
  });
});
