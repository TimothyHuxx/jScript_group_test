const ageCalculator = require("../src/ageCalculatorVenera");
const expect = require("chai").expect;

describe("Test suit for  ageClaculator", () => {
    it("ageCalculator should output (29 or 30 )", () => {
        expect (ageCalculator()).to.be.equal(29);
    })
})