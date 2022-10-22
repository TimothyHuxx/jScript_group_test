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

    it("convert(-77) should return (-77)", () => {
        expect(convert(-77)).to.be.equal(-77);
    })

    it("convert(-88) should return (-88)", () => {
        expect(convert(-88)).to.be.equal(-88);
    })

    it("convert(-99) should return (-99)", () => {
        expect(convert(-99)).to.be.equal(-99);
    })

    it("convert(1002) should return (2001)", () => {
        expect(convert(1002)).to.be.equal(2001);
    })

    it("convert(4001) should return (1004)", () => {
        expect(convert(4001)).to.be.equal(1004);
    })
})

