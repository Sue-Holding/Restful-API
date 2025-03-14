import request  from "supertest";
import app from "../app";

describe("GET /test", () => {
  it("should return a 200 status and a message", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Hello, world!");
  });
});

