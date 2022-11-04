const polyndrom = require('../src/isGreaterThanTenVenera.js')
const expect = require ("chai").expect;

describe("Test suit for isGreaterThanTen function", () => {
    it("isGreaterThanTen(45) should return (true)", () => {
        expect(isGreaterThanTen(45)).to.be.equal(true);
    })
})