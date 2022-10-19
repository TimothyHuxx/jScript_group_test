const convert = require("../src/testFunc");
const expect = require("chai").expect;

describe("Test suit for convert function", () => {
    it("convert(345) should return (543)", () => {
        expect(convert(345)).to.be.equal(543);
    })

    it("convert(-123) should return -321", () => {
        expect(convert(-123)).to.be.equal(-321);
    })

    it("convert(0) should return 0", () => {
        expect(convert(0)).to.be.equal(0);
    })

    it("convert(1) should return 1", () => {
        expect(convert(1)).to.be.equal(1);
    })
    
    it("convert(-0) should return -0", () => {
        expect(convert(-0)).to.be.equal(-0);
    })

    it("convert(-2) should return -2", () => {
        expect(convert(-2)).to.be.equal(-2);
    })
    it("convert(-3) should return -3", () => {
        expect(convert(-3)).to.be.equal(-3);
    })
})