var chai = require('chai'),
    chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
let moment = require('moment');
let globalData = require('./globalData.json');
let baseURL = globalData.API.BASE_URL;
let dateParameter = globalData.API.DATE_PARAMETER;
let invalidDateParameter = globalData.API.INVALID_DATE_PARAMETER; //date has leading zero in the day

describe('STOCKS API TESTS', function () {
    it('TEST1: test case that prove the request behavior works as intended', function (done) {
        //validating the request API URL endpoint
        expect(baseURL).to.includes("api/stocks");
        chai.request(baseURL + "" + dateParameter)
            .get('/')
            .end(function (err, res) {
                expect(res.req.method).to.equal("GET");
                done();
            });
    });

    it('TEST2: test case that prove the request behavior works as intended', function (done) {
        let actualDateFormat = dateParameter;
        let expectedDateFormat = moment(dateParameter, "D-MMMM-YYYY").format("D-MMMM-YYYY");
        //validating the request date parameter format
        expect(actualDateFormat).to.equal(expectedDateFormat);
        chai.request(baseURL + "" + dateParameter)
            .get('/')
            .end(function (err, res) {
            });
        done();
    });

    it('TEST3: test case that prove the response behavior works as intended', function (done) {
        chai.request(baseURL + "" + dateParameter)
            .get('/')
            .end(function (err, res) {
                //validating there are no errors in the API call
                expect(err).to.be.null;
                //validating the response code for the get call is as expected
                expect(res).to.have.status(200);
                //Printing the response code and text on the console
                done();
            });
    });

    it('TEST4: test case that prove the response behavior works as intended', function (done) {
        chai.request(baseURL + "" + dateParameter)
            .get('/')
            .end(function (err, res) {
                //validating the response has expected date value
                expect(res.text).to.includes(dateParameter);
                //validating the response has expected data keys
                expect(res.text).to.includes("date");
                expect(res.text).to.includes("open");
                expect(res.text).to.includes("high");
                expect(res.text).to.includes("low");
                expect(res.text).to.includes("close");
                done();
            });
    });

    it('TEST5: test case that proves the request behavior does not work as intended - there is a bug', function (done) {
        chai.request(baseURL + "" + invalidDateParameter)
            .get('/')
            .end(function (err, res) {
                // validating that the test has errors when the date format is wrong - has leading zeroes in the day.
                // (As per description note: the date passed to the URL must not have any leading zeroes in the day.)
                expect(err).to.not.be.null;
                done();
            });
    });

    it('TEST6: test case that demonstrates boundary based testing', function (done) {
        chai.request(baseURL + "" + invalidDateParameter)
            .get('/')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                //getting the value of key the 'open' from the response text
                let openValue = JSON.parse(res.text).open;
                //getting the decimal places precision of the value
                let openValueDecimalPlacesPrecision = openValue.toString().split('.')[1].length;
                //Validating boundaries on the value
                expect(openValueDecimalPlacesPrecision).to.equal(2);
                expect(openValueDecimalPlacesPrecision).to.not.equal(1);
                expect(openValueDecimalPlacesPrecision).to.not.equal(3);
                done();
            });
    });

    it('TEST7: negative test case', function (done) {
        //using port 3001 instead of port 3000
        chai.request('http://localhost:3001/api/stocks?date=12-May-2023')
            .get('/')
            .end(function (err, res) {
                //validating that some error is present
                expect(err).to.not.be.null;
                //validating that the error contains connection error and incorrect port number
                expect(JSON.stringify(err)).to.includes("ECONNREFUSED");
                expect(JSON.stringify(err)).to.includes("3001");
                done();
            });
    });
});