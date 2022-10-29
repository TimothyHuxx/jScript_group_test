const generateIntegers = require("../src/generateIntegers_func_Volha")
const expect = require("chai").expect;

describe("Test suit for generateIntegers function ", () => {
    it("generateIntegers(4, 8) should return ([ 4, 5, 6, 7, 8 ])", () => {
        expect(generateIntegers(4, 8)).to.be.eql([ 4, 5, 6, 7, 8 ]);
    })
    it("generateIntegers(-2, 2) should return ([ -2, -1, 0, 1, 2 ])", () => {
        expect(generateIntegers(-2, 2)).to.be.eql([ -2, -1, 0, 1, 2 ]);
    })
})
