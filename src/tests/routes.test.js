const supertest = require('supertest');
const app = require('../app')

describe("Test the home GET route", () => {
    test("Returns with status code 200", done => {
      supertest(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

//   describe("Test the getAllEvents GET route", () => {
//     test("Returns with status code 200", done => {
//       supertest(app)
//         .get("/api/getAllEvents")
//         .then(response => {
//           expect(response.statusCode).toBe(200);
//           done();
//         });
//     });
//   });


  describe("Test CSS 500 route", () => {
    test("Returns with status code of 500", done => {
      supertest(app)
      .get("/test500")
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
    });
  });