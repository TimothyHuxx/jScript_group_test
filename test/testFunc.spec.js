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

    it("convert(-10001) should return (-10001)", () => {
        expect(convert(-10001)).to.be.equal(-10001);
    })
  
    it("convert(-29374) should return -47392", () => {
        expect(convert(-29374)).to.be.equal(-47392);
    })

    it("convert(-0000) should return -0000", () => {
        expect(convert(-0000)).to.be.equal(-0000);
    })
    
    it("convert(-1357) should return (-7531)", () => {
        expect(convert(-1357)).to.be.equal(-7531);
    })

    it("convert(-1444) should return (-4441)", () => {
        expect(convert(-1444)).to.be.equal(-4441);
    })

    it("convert(-3) should return -3", () => {
        expect(convert(-3)).to.be.equal(-3);
    })
    
    it("convert(-7) should return -7", () => {
        expect(convert(-7)).to.be.equal(-7); 
    })
})