const isDivideBy = require("../src/isDivideBy_Func_Tim");
const expect = require("chai").expect;

describe("Test suit for isDevideBy function", () => {
    it("isDivideBy(-12, 2, -6) should return (true)", () => {
        expect(isDivideBy(-12, 2, -6)).to.be.equal(true);
    })
})