// Provide at least two test cases that prove the request behavior works as intended

var chai = require('chai')
  , chaiHttp = require('chai-http')
var expect = require('chai').expect;

chai.use(chaiHttp);

var autUrl = 'http://localhost:3000/'
var endpoint = 'api/stocks'
var query = 'date=5-January-2000'

describe('Stocks GET api/stocks', function () {

  describe('Request behavior works as intended', function () {

    it('Returned status code should be 200', async function () {
      return chai.request(autUrl)
        .get(endpoint + '?' + query)
        .then(function (res) {
          expect(res).to.have.status(200);
        })
    });

      it('Content type is application/json', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            expect(res.type).to.have.contain('application/json')
          })
      });
  });


});