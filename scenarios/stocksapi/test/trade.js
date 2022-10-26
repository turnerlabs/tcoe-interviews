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

    it('Request: Content type is application/json', async function () {
      return chai.request(app)
        .get('/api/stocks?date=5-January-2000')
        .then(function (res) {
          expect(res.type).to.have.contain('application/json')
        })
    });
  });

  it('Response: Verify attribute of Response.', async function () {
    return chai.request(app)
      .get('/api/stocks?date=5-January-2000')
      .then(function (res) {
        console.log(res.body);
        expect(res.body).to.have.property('date');
        expect(res.body).to.have.property('open');
        expect(res.body).to.have.property('high');
        expect(res.body).to.have.property('low');
        expect(res.body).to.have.property('close');
      })
  });

  it('Response: Verify attribute values of Response.', async function () {
    return chai.request(app)
      .get('/api/stocks?date=5-January-2000')
      .then(function (res) {
        console.log(res.body);
        expect(res.body).to.have.property('date').to.be.a('string');
        expect(res.body).to.have.property('open').to.be.a('string');
        expect(res.body).to.have.property('high').to.be.a('string');
        expect(res.body).to.have.property('low').to.be.a('string');
        expect(res.body).to.have.property('close').to.be.a('string');
      })
  });

  it('Negative test case', async function () {
    return chai.request(app)
      .get('/api/stocks?date=5-January-2000')
      .then(function (res) {
        console.log(res.body);
        expect(res.body).to.have.property('date').to.be.a('string');
        expect(res.body).to.have.property('open').to.be.a('number');
        expect(res.body).to.have.property('high').to.be.a('number');
        expect(res.body).to.have.property('low').to.be.a('number');
        expect(res.body).to.have.property('close').to.be.a('number');
      })
  });

  it('boundry value: Validate day in the body is less than 32', async function () {
    return chai.request(app)
      .get('/api/stocks?date=5-January-2000')
      .then(function (res) {
        var day = parseInt('/api/stocks?date=5-January-2000'.split('=')[1].split('-')[0]);
        expect(day).to.be.lessThan(32);
      })
  });

});
