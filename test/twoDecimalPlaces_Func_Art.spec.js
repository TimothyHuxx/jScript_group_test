const twoDecimalPlaces = require("../src/twoDecimalPlaces_Func_Art");
const expect = require("chai").expect;

describe("Test suit for twoDecimalPlaces function", () => {
    it("twoDecimalPlaces(32.8493) should return (32.84)", () => {
        expect(twoDecimalPlaces(32.8493)).to.be.equal(32.84);
    })

    it("twoDecimalPlaces(14.3286) should return (14.32)", () => {
        expect(twoDecimalPlaces(14.3286)).to.be.equal(14.32);
    })
})