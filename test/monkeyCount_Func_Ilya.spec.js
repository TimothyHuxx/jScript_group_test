const monkeyCount = require("../src/monkeyCount_Func_Ilya");
const expect = require("chai").expect;

describe("monkeyCount", () => {
    it("monkeyCount(5) should return [1, 2, 3, 4, 5]", () => {
      expect(monkeyCount(5)).to.be.eql([1, 2, 3, 4, 5]);
    })

    it("monkeyCount(8) should return [1, 2, 3, 4, 5, 6, 7, 8]", () => {
        expect(monkeyCount(8)).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8]);
      })
})
