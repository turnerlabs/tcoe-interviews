var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');
const { response } = require('../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

describe('stocks api', function () {
  describe('trades', function () {

    date = '6-October-2022';
    endpoint= '/api/stocks';
    invalidDate = '05-January-2000';
    invalidEndpoint= '/api/stock';

    //Test Case for Request Behaviour 1 :
    it('Status Code should not be 400', async function () {
      return chai.request(app)
        .get(endpoint).query('date='+date)
        .then(function (res) {
          //To verify request is not a Bad request
          expect(res).to.not.have.status(400);
          //To verify request is successful with 200 status
          expect(res).to.have.status(200);          
        })
    });

    //Test Case for Request and Response Behaviour 2 :
    it('Verify same date as passed in query parameter with Response', async function () {
      return chai.request(app)
        .get(endpoint).query('date='+date)
        .then(function (res) {
          expect(res.body['date']).to.be.a('string'); 
          //To verify the same date as passed in query parameter with Response
          expect(res.body['date']).to.equal(date);
        })
    });

    //Test Case for Request and Response Behaviour 3 :
    it('Verify all expected keys in response', async function () {
      return chai.request(app)
        .get(endpoint).query('date='+date)
        .then(function (res) {

          //To verify all expected keys in response
          expect(res.body).to.be.a('object').to.have.all.keys('date', 'close', 'high', 'low', 'open');
        })
    });

    //Test Case for Request and Response Behaviour 4 :
    it('Verify the status code 404 when wrong api call made(stock instead of stocks)', async function () {
      return chai.request(app)
        .get(invalidEndpoint).query('date='+date)
        .then(function (res) {
          // 404 Not found if wrong api called
          expect(res).to.have.status(404);
          expect(res.body).to.be.empty;
        })
    });

    //Test Case for Request and Response for Negative case Behaviur :
    it('Incorrect http method', async function () {
      return chai.request(app)
        .put(endpoint).query('date='+date)
        .then(function (res) {
          //To verify status code as with 404. Sometime we may get 405 code as well.
          expect(res).to.have.status(404);
          expect(res.body).to.be.empty;
          
        })
    });
    
    // Test Case for Boundary Condition and it has high possibility for a bug due to random values as high>=(open|close)>=low 
    it('Verify the response for the boundary condition', async function () {
      return chai.request(app)
        .get(endpoint).query('date='+date)
        .then(function (res) {
          expect(res).to.have.status(200);
         
          // res.body = {
          //   "date": "5-January-2000",
          //   "open": 5265.09,
          //   "high": 5464.35,
          //   "low": 5184.48,
          //   "close": 5357
          // }

          // The below conditions transitively states that high >= low
          expect(res.body['high']>=res.body['open']).to.be.true;
          expect(res.body['high']>=res.body['close']).to.be.true;
          expect(res.body['low']<=res.body['open']).to.be.true;
          expect(res.body['low']<=res.body['close']).to.be.true;
        })
    });

    //Test Case for Bug
    it('Verify the data type for the value in response', async function () {
      return chai.request(app)
        .get(endpoint).query('date='+date)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body['open']).to.be.a('number');
          expect(res.body['high']).to.be.a('number');
          expect(res.body['low']).to.be.a('number');
          expect(res.body['close']).to.be.a('number');
        })
    });

    // Test Case for Negative case and Bug
    it('Verify the Status code when the date have preceeding 0', async function () {
      return chai.request(app)
        .get(endpoint).query('date='+invalidDate)
        .then(function (res) {
          expect(res).to.not.have.status(200);
          expect(res).to.not.have.all.keys('date', 'close', 'high', 'low', 'open');
        })
    });

    // Test Case for Negative case and Bug
    it('Verify the status code for Invalid query parameter (missing = in date query parameter passed)', async function () {
      return chai.request(app)
        .get(endpoint).query('date5-January-2000')
        .then(function (res) {
          // Should be mostly 400 bad request but we are receiving
          expect(res).to.not.have.status(200);
          expect(res).to.have.status(400);
        })
    });

     // Test Case for Negative case and Bug
    it('Verify the status code for Null query parameter value', async function () {
      return chai.request(app)
        .get(endpoint).query('date=')
        .then(function (res) {
          // Mostly Bad Request with 400 status code
          expect(res).to.not.have.status(200);
          expect(res).to.have.status(400);
        })
    });

    // Test Case for Negative case and Bug
    it('Verify the status code for Missing query parameter', async function () {
      return chai.request(app)
        .get(endpoint)
        .then(function (res) {
          // Mostly Bad Request with 400 status code
          // Currently bug as it returns data with no date field
          expect(res).to.not.have.status(200);
          expect(res).to.have.status(400);
        })
    });

    
  });
});