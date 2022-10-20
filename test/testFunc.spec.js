const convert = require("../src/testFunc");
const expect = require("chai").expect;

describe("Test suit for convert function", () => {
    it("convert(345) should return (543)", () => {
        expect(convert(345)).to.be.equal(543);
    })
})
