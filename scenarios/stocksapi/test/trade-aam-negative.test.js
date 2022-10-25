// Provide at least one negative test case

var chai = require('chai')
  , chaiHttp = require('chai-http')
var expect = require('chai').expect;

chai.use(chaiHttp);

var autUrl = 'http://localhost:3000/'
var endpoint = 'api/stocks'
var query = 'date=5-Month-2000'
var months = ['January', 'Febrary', 'March']

describe('Stocks GET api/stocks', function () {

  describe('Negative tests scenarios', function () {

    it('Validate the query has a valid date', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            console.log('query : ' + query);
            expect(res).not.to.have.status(200);
          })
      });

    it('Validate date returned has a valid month', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            expect(months).to.be.contain(res.body.date.split('-')[1]);
          })
      });

  });


});