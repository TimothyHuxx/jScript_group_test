const isTriangle = require("../src/isThisTriangle_Func_Olga");
const expect = require("chai").expect;

describe("Test suit for isTriangle function", () => {
    it("isTriangle(12, 2, 6) should return (false)", () => {
        expect(isTriangle(12, 2, 6)).to.be.equal(false);
    })
})