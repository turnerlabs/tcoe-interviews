// Provide at least two test cases that prove the response behavior works as intended

var chai = require('chai')
  , chaiHttp = require('chai-http')
var expect = require('chai').expect;

chai.use(chaiHttp);

var autUrl = 'http://localhost:3000/'
var endpoint = 'api/stocks'
var query = 'date=5-January-2000'

describe('Stocks GET api/stocks', function () {

  describe('Response behavior works as intended', function () {

    it('Returned body has the expeted properties', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            expect(res.body).to.have.property('date');
            expect(res.body).to.have.property('open');
            expect(res.body).to.have.property('high');
            expect(res.body).to.have.property('low');
            expect(res.body).to.have.property('close');
          })
      });

      it('Returned date in body is the same as in the query', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            expect(query).contain(res.body.date);
          })
      });
  });


});