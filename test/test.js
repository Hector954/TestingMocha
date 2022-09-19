import { dbconnect } from "../db.js";
import assert from "assert";

describe("Test for successful connection to database", () => {
  it("should return status 200", async () => {
    const result = await dbconnect();
    assert.equal(result, 200);
  });
  it("should return status 500", async () => {
    const result = await dbconnect();
    assert.equal(result, 500);
  });
});
