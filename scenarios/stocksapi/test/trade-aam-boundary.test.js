// Provide at least one test case that demonstrates boundary based testing

var chai = require('chai')
  , chaiHttp = require('chai-http')
var expect = require('chai').expect;

chai.use(chaiHttp);

var autUrl = 'http://localhost:3000/'
var endpoint = 'api/stocks'
var query = 'date=40-January-2000'

describe('Stocks GET api/stocks', function () {

  describe('Boundaries tests scenarios', function () {

      it('Validate day in body is grater than 0', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            var day = parseInt(query.split('=')[1].split('-')[0]);
            expect(day).to.be.greaterThan(0);
          })
      });

      it('Validate day in the body is less than 32', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            var day = parseInt(query.split('=')[1].split('-')[0]);
            expect(day).to.be.lessThan(32);
          })
      });
  });


});