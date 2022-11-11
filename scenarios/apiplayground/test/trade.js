
const chai = require("chai");
const request = require("supertest");
const dateutility = require('../Helper/dateutility')

const expect = chai.expect;
const app = require('../api/app');
const assert = require('assert');
const { ok } = require("assert");
const { map, mountpath } = require("../api/app");



const validDate= '5-January-2022';
const invalidDate='aabbccdd';
const futureDate="5-January-2023"







describe("stocks api", function () {

  describe("GET /trades", function () {

    
    
    // TC1 -Positive Test : to prove the request behavior works as intended
    it("TC1 -Positive Test : to prove the request behavior works as intended \n"+
    " should return 200 OK when API is run wide open without specifying parameters", async function () {
      const response = await request(app)
        
        .get("/api/stocks")
        .expect(200)
        .expect(ok)
       // console.log(response);
        console.log(response.statusCode);
        console.log(response.body);


   });

   
   //TC 2 Positive Test : to prove the request behavior works as intended
   it("TC 2 Positive Test : to prove the request behavior works as intended\n"+
      "should return 200 OK when API is with specifying a valid date parameter Data="+validDate, async function () {
    const response = await request(app)
      .get("/api/stocks?date="+validDate)
      .expect(200).expect(ok)
      console.log(response.statusCode);
      console.log(response.body);
    });

    
    //TC 3 : Negetive Test : to prove the request behavior works as intended
    // Note - as per the requirements, leading zeros shall not be accepted
    // I would expect a 400 here, but since not specified cannot make that assumption, however, 200 OK shall not be the response
    // proves the request behavior does not work as intended (there's a bug)
    it("TC 3 : Negetive Test : to prove the request behavior works as intended\n"+
    "should not return 200 OK when API is with specifying date is prefixed with 0 in month Data="+"0"+validDate, async function () {
      const response = await request(app)
        .get("/api/stocks?date="+"0"+validDate)
        .expect(!200).expect(!ok)
        console.log(response.statusCode);
        console.log(response.body);
      });
    
      
      //TC 4 : Negetive Test : to prove the request behavior works as intended
      // Date Field is populated as invalid date- expected behavior is API shall throw 400 . Not 200
      // proves the request behavior does not work as intended (there's a bug)
      it("TC 4 : Negetive Test : to prove the request behavior works as intended\n"+
        "should not return 200 OK when API is with specifying date is prefixed is invalid Test Data"+ invalidDate, async function () {
      const response = await request(app)
        .get("/api/stocks?date="+invalidDate)
        .expect(!200).expect(!ok)
        console.log(response.statusCode);
        console.log(response.body);
      });
    

      


    // TC 5 that prove the response behavior works as intended - Data Contract Validation
    
    it("TC 5 that prove the response behavior works as intended - Data Contract Validation"+
    "Should return all the elements mentioned parameter in data contract when test data being used is valid Date : "+validDate, async function () {
      const response = await request(app)
        .get("/api/stocks?date="+validDate)
        .expect(200).expect(ok)
        .expect('Content-Type', 'application/json; charset=utf-8')
        console.log(response.statusCode);
        console.log(response.body);
        const responseBody = response.body;
        assert(responseBody.hasOwnProperty('date'));
        assert(responseBody.hasOwnProperty('open'));
        assert(responseBody.hasOwnProperty('high'));
        assert(responseBody.hasOwnProperty('low'));
        assert(responseBody.hasOwnProperty('close'));
        
      });
      

      // TC 6 test cases that prove the response behavior works as intended - Data Validation of response
      it("TC 6 test cases that prove the response behavior works as intended - Data Validation of response\n"+
        "Should return valid data when test data under use is  Date : "+validDate, async function () {
        const response = await request(app)
          .get("/api/stocks?date="+validDate)
          .expect(200).expect(ok)
          .expect('Content-Type', 'application/json; charset=utf-8')
          console.log(response.statusCode);
          console.log(response.body);
          const responseBody = response.body;
          
         
          assert.equal(responseBody.date,validDate);
          expect(parseFloat(responseBody.open)).to.be.a("number");
          expect(parseFloat(responseBody.high)).to.be.a("number");
          expect(parseFloat(responseBody.low)).to.be.a("number");
          expect(parseFloat(responseBody.close)).to.be.a("number");
          assert.equal(true,parseFloat(responseBody.high)>=parseFloat(responseBody.low)? true:false)  ;
          
        });


          

      // TC 7a: Boundary based testing
      // Validate if date is in current date, then API shall retrurn value

        it(" TC 7a: Boundary based testing Validate if date is current date, then API shall retrurn value"+
        "Should return valid data when test data under use is today's  Date : "+dateutility.get_todays_Date(), async function () 
        {
          
          console.log(dateutility.get_todays_Date());
          //console.log(dateutility.get_next_date());
          //console.log(dateutility.getMonthAlphabetical(1));
          
          
          const response = await request(app)
          .get("/api/stocks?date="+dateutility.get_todays_Date())
          .expect(200).expect(ok)
          .expect('Content-Type', 'application/json; charset=utf-8')
          console.log(response.statusCode);
          console.log(response.body);
          const responseBody = response.body;
          
         
          assert.equal(responseBody.date,dateutility.get_todays_Date());
          expect(parseFloat(responseBody.open)).to.be.a("number");
          expect(parseFloat(responseBody.high)).to.be.a("number");
          expect(parseFloat(responseBody.low)).to.be.a("number");
          expect(parseFloat(responseBody.close)).to.be.a("number");
          assert.equal(true,parseFloat(responseBody.high)>=parseFloat(responseBody.low)? true:false)  ;
          
         
         
        });

        

        //TC7B Boundary based testing
        //Validate if date is > current date, then API shall return no value
        it(" TC 7B: Boundary based testing Validate if date is > current date, then API shall not return value"+
        "Should not return valid data when test data under use is today's  Date : "+dateutility.get_next_date(), async function () 
        {
          
          console.log(dateutility.get_next_date());
          //console.log(dateutility.get_next_date());
          //console.log(dateutility.getMonthAlphabetical(1));
          
          
          const response = await request(app)
          .get("/api/stocks?date="+dateutility.get_next_date())
          .expect(200).expect(ok)
          .expect('Content-Type', 'application/json; charset=utf-8')
          console.log(response.statusCode);
          console.log(response.body);
          const responseBody = response.body;
          
         
          assert.equal(responseBody.date,dateutility.get_next_date());
          assert.equal(responseBody.open,null);
          assert.equal(responseBody.high,null);
          assert.equal(responseBody.low,null);
          assert.equal(responseBody.close,null);
          assert.equal(responseBody.high,null)  ;
          
         
         
        });


        
        
  });

});


  
