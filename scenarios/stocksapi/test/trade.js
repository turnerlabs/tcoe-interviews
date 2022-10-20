var chai = require('chai')
    , chaiHttp = require('chai-http')
    , app = require('../api/app');

var expect = require('chai').expect;

const endpoint = '/api/stocks'

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

describe('stocks api', function () {
    describe('trades', function () {
        it('should be happy', async function () {
            return chai.request(app)
                .get(endpoint)
                .then(function (res) {
                    expect(res).to.have.status(200);
                })
        });
        it('Request: The API should receive dates in format d-mmmm-yyyy', async function () {
            const date = '20-October-2023'
            return chai.request(app)
                .get(endpoint + '?date=' + date)
                .then(function (res) {
                    expect(res).to.have.status(200);
                    expect(res.body.date).equal(date);
                })
        });
        it('Request & Bug: The API should not receive dates in format different than d-mmmm-yyyy', async function () {
            const date = 'october-10-2021'
            return chai.request(app)
                .get(endpoint + '?date=' + date)
                .then(function (res) {
                    expect(res).to.have.status(400);
                })
        });
        it('Response: The API should response for the date 5-January-2001 with a date field', async function () {
            const date = '5-January-2001'
            return chai.request(app)
                .get(endpoint + '?date=' + date)
                .then(function (res) {
                    expect(res).to.have.status(200);
                    expect(res.body.date).equal(date);
                    expect(res.body.date).to.be.an('string');
                })
        });
        it('Response & Bug: The API should response for the date 5-January-2001 with a open, high, ' +
            'low and close number fields', async function () {
            const date = '5-January-2001'
            return chai.request(app)
                .get(endpoint + '?date=' + date)
                .then(function (res) {
                    expect(res).to.have.status(200);
                    expect(res.body.open).to.be.an('number');
                    expect(res.body.high).to.be.an('number');
                    expect(res.body.low).to.be.an('number');
                    expect(res.body.close).to.be.an('number');
                })
        });
        it('Negative & Bug: The API should not receive days with a leading zeroes', async function () {
            const date = '05-January-2001'
            return chai.request(app)
                .get(endpoint + '?date=' + date)
                .then(function (res) {
                    expect(res).to.have.status(400);
                })
        });
      it('Negative & Boundary & Bug: The API should not receive non calendar days', async function () {
        const date = '32-January-2001'
        return chai.request(app)
            .get(endpoint + '?date=' + date)
            .then(function (res) {
              expect(res).to.have.status(400);
            })
      });
    });
});