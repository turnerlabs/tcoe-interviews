var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../../api/app')
  , fs = require('fs');

var expect = require('chai').expect;

chai.use(chaiHttp);

describe('Provide at least two test cases that prove the request behavior works as intended:', function () {
    let iterations = JSON.parse(fs.readFileSync(`${__dirname}/test_dates.json`, {encoding: 'utf8', flag: 'r'})).iterations;

    iterations.forEach(function (run) {
        it(`Get stock for differents dates - Case: ${run.day}-${run.month}-${run.year}`, async function () {
            return chai.request(app)
                .get(`/api/stocks?date=${run.day}-${run.month}-${run.year}`)
                .then(function (res) {
                    expect(res).to.have.status(200);
                })
        });
    });
});

describe('Provide at least two test cases that prove the response behavior works as intended:', function () {
    let iterations = JSON.parse(fs.readFileSync(`${__dirname}/test_dates.json`, {encoding: 'utf8', flag: 'r'})).iterations;

    iterations.forEach(function (run) {
        it(`Check response in stock for differents dates - Case: ${run.day}-${run.month}-${run.year}`, async function () {
            return chai.request(app)
                .get(`/api/stocks?date=${run.day}-${run.month}-${run.year}`)
                .then(function (res) {
                    expect(res).to.have.status(200);

                    // A better testing could be using OpenAPI schema and validate properties and types in the response
                    expect(res.body).property('date').to.be.not.empty;
                    expect(res.body).property('open').to.be.not.empty;
                    expect(res.body).property('high').to.be.not.empty;
                    expect(res.body).property('low').to.be.not.empty;
                    expect(res.body).property('close').to.be.not.empty;

                    // Check content
                    expect(res.body).property('date').to.be.equal(`${run.day}-${run.month}-${run.year}`);
                    expect(+res.body.open).to.be.a("number");
                    expect(+res.body.high).to.be.a("number");
                    expect(+res.body.low).to.be.a("number");
                    expect(+res.body.close).to.be.a("number");
                })
        });
    });
});

describe('Provide at least one test case that proves the request behavior does not work as intended:', function () {
    let iterations = JSON.parse(fs.readFileSync(`${__dirname}/test_bugs.json`, {encoding: 'utf8', flag: 'r'})).iterations;

    iterations.forEach(function (run) {
        it(`Check negative date cases - Case: ${run.day}-${run.month}-${run.year}`, async function () {
            return chai.request(app)
                .get(`/api/stocks?date=${run.day}-${run.month}-${run.year}`)
                .then(function (res) {
                    expect(res, run.check).to.not.have.status(200);
                })
        });
    });

    it('Check wrong date content', async function () {
        return chai.request(app)
            .get('/api/stocks?date=foo')
            .then(function (res) {
                expect(res, 'Expect failure response when request send date=foo').to.not.have.status(200);
            })
    });
});

describe('Provide at least one test case that demonstrates boundary based testing:', function () {
    let iterations = JSON.parse(fs.readFileSync(`${__dirname}/test_boundary_dates.json`, {encoding: 'utf8', flag: 'r'})).iterations;

    iterations.forEach(function (run) {
        it(`Check boundaries - Case: ${run.day}-${run.month}-${run.year}`, async function () {
            return chai.request(app)
                .get(`/api/stocks?date=${run.day}-${run.month}-${run.year}`)
                .then(function (res) {
                    expect(res).to.have.status(200);
                })
        });
    });
});

describe('Provide at least one negative test case:', function () {
    it('Check wrong endopoint', async function () {
        return chai.request(app)
            .get(`/api/stock?date=5-January-2000`)
            .then(function (res) {
                expect(res).to.have.status(404);
            })
    });
});

