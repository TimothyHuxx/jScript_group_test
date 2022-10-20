const convert = require("../src/testFunc");
const expect = require("chai").expect;

describe("Test suit for convert function", () => {
    it("convert(111) should return (111)", () => {
        expect(convert(111)).to.be.equal(111);
    })

    it("convert(-2022) should return (-2022)", () => {
        expect(convert(-2022)).to.be.equal(-2022);
    })
})

