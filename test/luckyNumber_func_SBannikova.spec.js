const isLucky = require("../src/luckyNumber_func_SBannikova");
const expect = require("chai").expect;

describe("isLucky", () => {
    it("isLucky(1892376) should return (true)", () => {
      expect(isLucky(1892376)).to.be.equal(true);
    })

    it("isLucky(189237)) should return (false)", () => {
        expect(isLucky(189237)).to.be.equal((false));
      })
})
