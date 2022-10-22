const calculateInstallments = require("../src/calculateInstallments_Yl")
const expect = require("chai").expect;

describe("Test suit for calculation oder amoung ", () => {
    it("calculate(100.08) should return (25.02)", () => {
        expect(calculateInstallments(100.08)).to.be.eql([ 25.02, 25.02, 25.02, 25.02 ]);
    })
    it("calculate(50.02) should return (12.05)", () => {
        expect(calculateInstallments(50.02)).to.be.eql([ 12.5, 12.5, 12.5, 12.5 ]);
    })
})