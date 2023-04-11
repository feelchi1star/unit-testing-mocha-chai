import { assert } from "chai";
import App, { Test, addNumber } from "../index.js";
import { describe } from "mocha";

describe("App Files Testing", function () {
  it("app should return hello", () => {
    assert.equal(App(), "Hello");
  });

  it("Test App", () => {
    assert.typeOf(Test(), "number");
  });

  // Grouping
  describe("Add Two Number That is Greater Than 5", () => {
    it("a + b sum be greater than 5", () => {
      assert.isAbove(addNumber(3, 3), 5);
    });
  });
});
