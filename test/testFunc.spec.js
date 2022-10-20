const convert = require("../src/testFunc");
const expect = require("chai").expect;

describe("Test suit for convert function", () => {
    it("convert(111) should return (111)", () => {
        expect(convert(111)).to.be.equal(111);
    })

    it("convert(-2) should return (-2)", () => {
        expect(convert(-2)).to.be.equal(-2);
    })
   
    it("convert(-1) should return (-1)", () => {
        expect(convert(-1)).to.be.equal(-1);
    })

    it("convert(-2000) should return (-0002)", () => {
    expect(convert(-2000)).to.be.equal(-0002);
    })
})

