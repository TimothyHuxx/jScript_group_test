const makeNegative = require("../src/makeNegative_func_Oxana");
const expect = require("chai").expect;

describe("Test suit for make negative function", () => {
    it("makeNegative(1) should return (-1)", () => {
        expect(makeNegative(1)).to.be.equal(-1);
    })

    it("makeNegative(-5) should return -5", () => {
        expect(makeNegative(-5)).to.be.equal(-5);
    })
});
