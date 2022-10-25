const positiveSum = require("../src/sumOfPositive_Func_SBannikova");
const expect = require("chai").expect;

describe("Test suit for positiveSum function", () => {
    it("positiveSum([1,2,3,4,5]) should return (15)", () => {
        expect(positiveSum([1,2,3,4,5])).to.be.equal(15);
    })

     it("positiveSum([1,-2,3,4,5]) should return (13)", () => {
        expect(positiveSum([1,-2,3,4,5])).to.be.equal(13);
    })
})