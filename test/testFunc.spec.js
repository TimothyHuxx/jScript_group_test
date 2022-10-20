const convert = require("../src/testFunc");
const expect = require("chai").expect;

describe("Test suit for convert function", () => {
    it("convert(111) should return (111)", () => {
        expect(convert(111)).to.be.equal(111);
    })
})
