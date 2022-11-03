var chai = require('chai')
  , chaiHttp = require('chai-http')
  , app = require('../api/app');

var expect = require('chai').expect;
var day = 5;

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

  describe('api/stocks', function () {
  /*Request test cases*/
      it('TC-1, Get request for valid date', async function () {
        return chai.request(app)
          .get('/api/stocks?date=6-June-2015')
          .then(function (res) {
            expect(res).to.have.status(200);
          })
      });
       //404 error expected because patch is not a valid request for this api
      it('TC-2, Patch request for a valid date', async function () {
              return chai.request(app)
                .patch('/api/stocks?date=30-May-2022')
                .then(function (res) {
                  expect(res).to.have.status(404);
                })
      });

      /*Response test cases*/

      it('TC-3, Verify response structure', async function () {
            return chai.request(app)
              .get('/api/stocks?date=31-December-2008')
              .then(function (res) {
                expect(res.body).to.have.property("open");
                expect(res.body).to.have.property("high");
                expect(res.body).to.have.property("low");
                expect(res.body).to.have.property("close");
              });
          });

          it('TC-4, Verify response values', async function () {
                return chai.request(app)
                  .get('/api/stocks?date=31-December-2008')
                  .then(function (res) {
                    expect(res.body['open']).not.equal(null);
                    expect(res.body['high']).not.equal(null);
                    expect(res.body['low']).not.equal(null);
                    expect(res.body['close']).not.equal(null);
                  })
              });

      /*Bug*/
      //Smarch is accepted as a valid month
      it('TC-5, Invalid month is accepted', async function () {
                return chai.request(app)
                   .get('/api/stocks?date=13-Smarch-1997')
                   .then(function (res) {
                      expect(res).to.have.status(400);
                   })
                });

      /*Boundary test*/
      it('TC-6, Verify that day is greater than 0', async function () {
                return chai.request(app)
                   .get('/api/stocks?date='+day+'-July-2006')
                   .then(function (res) {
                      expect(day).to.be.greaterThan(0);
                    })
                });

    /*Negative test*/
    //Status 400 expected as the format of the get request is invalid
    //Bug, the request goes through with a bad year format
      it('TC-7, Year is not entered in the correct format', async function () {
                return chai.request(app)
                    .get('/api/stocks?date=20-October-08')
                     .then(function (res) {
                        expect(res).to.have.status(400);
                     })
                });


  });

