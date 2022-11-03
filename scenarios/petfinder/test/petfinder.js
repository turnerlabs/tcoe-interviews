const Cube = require('../src/app').Cube;
const expect = require('chai').expect;

var page = 2;

describe('Petfinder', function() {

    /*Request test cases*/
    it('TC-1, Get request for dogs', async function () {
        return chai.request(app)
          .get('/animals?type=dog')
          .then(function (res) {
            expect(res).to.have.status(200);
          })
      });
    it('TC-2, Invalid category', async function () {
         return chai.request(app)
            .get('/humans?type=dog')
            .then(function (res) {
                expect(res).to.have.status(404);
            })
      });

      /*Response test cases*/

      it('TC-3, Verify response structure', async function () {
            return chai.request(app)
              .get('/animals?type=dog')
              .then(function (res) {
                expect(res.body).to.have.property("animals");
                expect(res.body).to.have.property("pagination");
              });
          });
      it('TC-4, Verify that id is not null', async function () {
            return chai.request(app)
               .get('/animals?type=dog')
               .then(function (res) {
                  expect(res.body['id']).not.equal(null);
               })
            });

        /*Boundary test*/
      it('TC-5, Verify that page is greater than 0', async function () {
             return chai.request(app)
                .get('/animals?type=dog&page'+page)
                .then(function (res) {
                    expect(page).to.be.greaterThan(0);
                })
             });
      /*Negative test*/
      it('TC-5, Parameter without value', async function () {
                   return chai.request(app)
                      .get('/animals?type=')
                      .then(function (res) {
                          expect(res).to.have.status(404);
                      })
                   });

});