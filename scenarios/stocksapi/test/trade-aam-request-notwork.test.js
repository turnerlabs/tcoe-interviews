// Provide at least one test case that proves the request behavior does not work as intended (there's a bug)

var chai = require('chai')
  , chaiHttp = require('chai-http')
var expect = require('chai').expect;

chai.use(chaiHttp);

var autUrl = 'http://localhost:3000/'
var endpoint = 'api/stocks'
var query = 'date=05-January-2000'

describe('Stocks GET api/stocks', function () {

  describe('Request behavior does not work', function () {

    it('Date must not have any leading zeroes in the day', async function () {
        return chai.request(autUrl)
        .get(endpoint + '?' + query)
          .then(function (res) {
            console.log('query : ' + query);
            expect(res.body.date.substring(0,1)).not.have.string('0');
          })
      });

  });


});