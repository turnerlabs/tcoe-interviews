var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

// Scenario-01: Provide at least two test cases that prove the request behavior works as intended
describe('SC001_stocks_api: Verification of request API behavior', function () {
  describe('SC001_TC001_To validate the API request on appending valid end point to the base URL', function () {
    it('verifying request status appending valid uri path to base URL', async function () {
      chai.request(app)
        .get('/api/stocks')
        .then(function (res) {
          expect(res).to.have.status(200)
          console.log("API request is success with status code: " + res.status)
        })
    });
  });
});

// Scenario-01: Provide at least two test cases that prove the request behavior works as intended
describe('SC001_stocks_api: Verification of request API behavior', function () {
  describe('SC001_TC002_To validate the API request on appending / to the base URL', function () {
    it('verifying request status appending / to base URL', async function () {
      return chai.request(app)
        .get('/')
        .then(function (res) {
          expect(res).to.have.status(200)
          console.log("API request is success with status code: " + res.status)  
        })
    });
  });
});

// Scenario-02: Provide at least two test cases that prove the response behavior works as intended
describe('SC002_stocks_api: Verification of API response behavior', function () {
  describe('SC002_TC001_To validate the API response JSON payload keys', function () {
    it('verifying response JSON payload keys', async function () {
      let date = '2-November-2022'
      let expectedKeys = [ 'date', 'open', 'high', 'low', 'close']
      return chai.request(app)
        .get('/api/stocks?date=' + `${date}`)
        .then(function (response) {
          let responseBodyData = response.body
          let responseBodyActualkeys = Object.keys(responseBodyData)
          expectedKeys.forEach(function (key){
            expect(responseBodyActualkeys).include(key)
          })
      }) 
    });
  });
});

// Scenario-02: Provide at least two test cases that prove the response behavior works as intended
// Note: Requirement: Excepected response value type to be a 'Number', but the response payload returns value as 'string'. Hence test case is failing
describe('SC002_stocks_api: Verification of API response behavior', function () {
  describe('SC002_TC002_To validate the API response JSON payload key-value type', function () {
    it('verifying response JSON payload keys', async function () {
      let date = '2-November-2022';
      return chai.request(app)
        .get('/api/stocks?date=' + date)
        .then(function (response) {
          expect(response.body).to.have.property('date').that.is.a('string');
          expect(response.body).to.have.property('open').that.is.a('number');
          expect(response.body).to.have.property('high').that.is.a('number');
          expect(response.body).to.have.property('low').that.is.a('number');
          expect(response.body).to.have.property('close').that.is.a('number');
        }) 
    });
  });
});

// Scenario-02: Provide at least two test cases that prove the response behavior works as intended
describe('SC002_stocks_api: Verification of API response behavior', function () {
  describe('SC002_TC003_To validate that the API response JSON payload date matches with request date', function () {
    it('verifying response JSON payload date matches with request date', async function () {
      let requestDate = '2-November-2022';
      return chai.request(app)
        .get('/api/stocks?date=' + requestDate)
        .then(function (response) {
          let responseDate = response.body.date;
          console.log(`requestedDate: ${requestDate}`);
          console.log(`responseDate: ${responseDate}`);            
          expect(`${requestDate}`).to.equal(`${responseDate}`);
        }) 
    });
  });
});

// Scenario-02: Provide at least two test cases that prove the response behavior works as intended
//Note: Considering average response time to be in between 0.1 to 1 second
describe('SC002_stocks_api: Verification of API response behavior', function () {
  describe('SC002_TC004_To validate that the API response time', function () {
    const startTime = process.hrtime();
    var dates = ['5-January-2000','5-January-2001']
    it('verifying API response time', async function () {
      dates.forEach(function (date){
        chai.request(app)
          .get('/api/stocks?date=' + `${date}`)
          .then(function (res) {
            expect(res).to.have.status(200);
             const processTime = process.hrtime(startTime);
              console.log(`Request took ${processTime[0] + processTime[1]/ (1e+9)} seconds`);      
          })        
      })
    });
  });
});

// Scenario-03: Provide at least one test case that proves the request behavior does not work as intended (there's a bug)
describe('SC003_stocks_api: Verification of API response behavior on sending invalid date value', function () {
  describe('SC003_TC001_To validate that the API response JSON payload retrieves no data on sending blank date ', function () {
    it('verifying response JSON payload retrieves no data on sending blank date', async function () {
      let date = '';
      return chai.request(app)
        .get('/api/stocks?date=' + date)
        .then(function (response) {
          console.log(expect(response.body).empty);
        }) 
    });
  });
});

// Scenario-03: Provide at least one test case that proves the request behavior does not work as intended (there's a bug)
describe('SC003_stocks_api: Verification of API response behavior on sending invalid date value', function () {
  describe('SC003_TC002_To validate that the API response JSON payload throws error on sending date day with leading zero ', function () {
    it('verifying response JSON payload throws error on sending date day with leading zero', async function () {
      let date = '02-November-2022';
      return chai.request(app)
        .get('/api/stocks?date=' + date)
        .then(function (res) {
        expect(res).to.not.have.status(200)
          console.log("API request failed with status code: " + res.status);  
        }) 
    });
  });
});

// Scenario-04: Provide at least one test case that demonstrates boundary based testing - positive test case
describe('SC004_stocks_api: Verification of API response behavior on sending date value as today', function () {
  describe('SC004_TC001_To validate that the API response JSON payload returns data on sending date value as today ', function () {
    it('verifying response JSON payload returns data on sending date value as today', async function () {
      let date = '2-November-2022';
      return chai.request(app)
        .get('/api/stocks?date=' + date)
        .then(function (response) {
        expect(response).to.have.status(200)
        console.log("API request failed with status code: " + response.status);  
          expect(response.body.date).to.equal(date);
        }) 
    });
  });
});

// Scenario-04: Provide at least one test case that demonstrates boundary based testing - negative test case
describe('SC004_stocks_api: Verification of API response behavior on sending date value as today+1', function () {
  describe('SC004_TC002_To validate that the API response JSON payload returns data on sending date value as today+1 ', function () {
    it('verifying response JSON payload returns data on sending date value as today+1', async function () {
      let date = '3-November-2022';
      return chai.request(app)
        .get('/api/stocks?date=' + date)
        .then(function (response) {
        expect(response).to.not.have.status(200)
        }) 
    });
  });
});

// Scenario-05: Provide at least one negative test case
describe('SC005_stocks_api: Verification of API response behavior with invalid end point url', function () {
  describe('SC004_TC001_To validate that the API response JSON payload returns error code on sending request with invalid end point', function () {
    it('verifying response JSON payload returns error code on sending request with invalid end point', async function () {
      let date = '3-November-2022';
      return chai.request(app)
        .get('/api/test?date=' + date)
        .then(function (response) {
          expect(response).to.not.have.status(200);
          expect(response).to.have.status(404);
          console.log("API request failed with status code: " + response.status); 
        }) 
    });
  });
});