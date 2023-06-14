var chai = require('chai'),
chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;

let testData = require('./testData.json');
let baseURL = testData.API.BASE_URL;
let dateParameter = testData.API.DATE_PARAMETER;
let invalidDateParameter = testData.API.INVALID_DATE_PARAMETER;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
let invalidbaseURL = testData.API.INVALID_BASE_URL;

describe('stocks api chai test', function () {
    it('TC01: Test case to prove that the request behavior works as intended',  function (done) {
         chai.request(baseURL+dateParameter)
            .get('/')
            .end(function (err,res) {
              //Check 1: Validate if the request method is GET
              expect(res.req.method).to.equal("GET");
              //Check 2: Validate if the request path contains /api/stocks
              expect(res.req.path).to.contain("/api/stocks")
              done();
            });
    });
    
    it('TC02: Test case to prove that the response behavior works as intended', function (done) { 
             chai.request(baseURL+dateParameter)
            .get('/')
            .end(function (err, res) {
              //Check 1: Validate if the reponse has status 200 OK
              expect(res).to.have.status(200);
              //Check 2: Validate if the response data has fields date,open,high,low,close
              expect(res.body).that.includes.all.keys('date','open','high','low','close');
              done();
            });   
    });
 
    it('TC03: Test case that proves the request behavior does not work as intended', function (done) {
      chai.request(baseURL+invalidDateParameter)
          .get('/')
          .end(function (err, res) {
              //Validate if error message is displayed when the query parameter date has a leading 0 in the date
              expect(err).to.not.be.null;
              //Validate if the status code is not 200 OK
              expect(res).to.not.have.status(200);
              done();
          });
  });

    it('TC04: Test case that demonstrates boundary based testing',  function (done) {
        chai.request(baseURL+dateParameter)
            .get('/')
            .end(function (err, res) {
              let closeVal = JSON.parse(res.text).close;
              let closeValDecimalPlaces = closeVal.toString().split('.')[1].length;
              //Validate if the field close has only 2 decimal places  
              expect(closeValDecimalPlaces).to.be.equals(2);
              //Validate if the field close does not have 3 decimal places 
              expect(closeValDecimalPlaces).to.not.be.equals(3);
              //Validate if the field close does not have 1 decimal places
              expect(closeValDecimalPlaces).to.not.be.equals(1);
             done();
            });        
    });

    it('TC05: Negative test case',  function (done) {
        chai.request(invalidbaseURL+dateParameter)
            .get('/')
            .end(function (err, res) {
              //Validate if HTTP error code 404 is displayed for invalid API URL
              expect(res).to.have.status(404);
              //Validate the error message displayed for invalid API URL
              expect(res.error.message).contains('cannot GET');
              done();       
            });
    });

});