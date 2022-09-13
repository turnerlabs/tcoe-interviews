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
});