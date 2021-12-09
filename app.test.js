const supertest = require("supertest");
const app = require("./app");

describe("GET /api/foo ", () => {
  test("It should respond with a json contains version and host", async () => {
    const request = supertest(app.listen());
    const response = await request.get("/api/foo");
    expect(response.body.version).toEqual(1);
    expect(response.statusCode).toBe(200);
  });
});