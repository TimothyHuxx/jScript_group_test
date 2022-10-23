const isLucky = require("../src/isDivideBy_Func_Tim");
const expect = require("chai").expect;

describe("Test suit for isLucky function", () => {
    it("isLucky(189237) should return (false)", () => {
        expect(isLucky(189237)).to.be.equal(false);
    })

    it("isLucky(22869) should return (false)", () => {
        expect(isLucky(22869)).to.be.equal(false);
    })
})