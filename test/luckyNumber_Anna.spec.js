const isLucky = require("../src/luckyNumber_Anna");
const expect = require("chai").expect;

describe("Test suit for isLucky function", () => {
    it("isLucky(189237) should return (false)", () => {
        expect(isLucky(189237)).to.be.equal(false);
    })

    it("isLucky(22869) should return (false)", () => {
        expect(isLucky(22868)).to.be.equal(false);
    })

    it("isLucky(9) should return (true)", () => {
        expect(isLucky(9)).to.be.equal(true);
    })

    it("isLucky(22869) should return (true)", () => {
        expect(isLucky(22869)).to.be.equal(true);
    })
})