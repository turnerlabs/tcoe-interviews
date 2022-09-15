var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');

var expect = require('chai').expect;

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

describe('stocks api', function () {
  describe('trades', function () {
      const responseKeysWithoutDate =['high', 'open', 'low', 'close']
      const validDate = '31-July-2022';
      const dateWithLeadingZeros = '01-Jan-2022';
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

     // test cases that prove the request behavior works as intended
    it('Make an API call without date param', async function () {
      return chai.request(app)
        .get('/api/stocks')
        .then(function (res) {
          expect(res).to.have.status(200);
        })
    });

    it('Make an API call with valid date param', async function () {
          return chai.request(app)
              .get('/api/stocks?date='+validDate)
              .then(function (res) {
                  expect(res).to.have.status(200);
              })
      });


      // test cases that prove the response behavior works as intended

    it('api call with no date param should not contain date in the response', async function () {
        return chai.request(app)
            .get('/api/stocks')
            .then(function (res) {
                expect(res).to.have.status(200);
                console.log(res.body);
                expect(res.body).to.not.contain.keys("date");
                expect(res.body).to.contain.keys(responseKeysWithoutDate);
            })
    });

    it('api call with date param should contain date in the response', async function () {
      return chai.request(app)
          .get('/api/stocks?date='+validDate)
          .then(function (res) {
              expect(res).to.have.status(200);
              console.log(res.body);
              expect(res.body).to.contain.keys("date");
              expect(res.body.date).to.equal(validDate);
              expect(res.body).to.contain.keys(responseKeysWithoutDate);
          })
    });


      //test case that proves the request behavior does not work as intended (there's a bug)
      // as per the requirement api should not accept a date with leading zeros but it is accepting.
      // it is not working as expected
      //This test case will fail since it is expecting 404 but api is responding with 200

    it('should throw an error when date passed in the URL have any leading zeroes in the day.', async function () {
      return chai.request(app)
          .get('/api/stocks?date='+dateWithLeadingZeros)
          .then(function (res) {
              expect(res).to.have.status(404);
          })
    });

     //negative test case

    it('should throw an error when the requested url is invalid', async function () {
      return chai.request(app)
          .get('/api/invalidstock')
          .then(function (res) {
              expect(res).to.have.status(404);
          })
    });

      // boundary based testing
      //should throw an error when the date is out of range(00-jan-0000 and funture date(tomorrow))
      //the test case fails since the api is not throwing any error(giving 200 response and it is not expected)

      it('searching with invalid dates(out of boundries) should throw an error', async function () {
          const date = new Date();
          date.setDate(date.getDate() + 1); //getting the tomorrow's date
          const tomorrow = date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
          const invalidInputDates = ['00-jan-0000',tomorrow];

          for (let i=0;1<invalidInputDates.length;i++){
              return chai.request(app)
                  .get('/api/stocks?date=' + invalidInputDates[i])
                  .then(function (res) {
                      expect(res).to.have.status(404);
                  });
          }
      });

      //test with valid input dates range current date and previous date

      it('searching with valid dates(with in boundries) should not throw an error', async function () {
          const date = new Date();
          const today = date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
          const validInputDates = ['10-May-1987',today];

          for (let i=0;1<validInputDates.length;i++){
              return chai.request(app)
                  .get('/api/stocks?date=' + validInputDates[i])
                  .then(function (res) {
                      expect(res).to.have.status(200);
                      expect(res.body).to.contain.keys("date");
                      expect(res.body.date).to.equal(validInputDates[i]);
                      expect(res.body).to.contain.keys(responseKeysWithoutDate);
                  });
          }
      });
  });
});