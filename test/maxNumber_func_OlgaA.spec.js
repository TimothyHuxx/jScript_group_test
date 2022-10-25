const maxNumber = require("../src/maxNumber_func_OlgaA");
const expect = require("chai").expect;

describe("Test suit for maxNumber function", () => {
    it("maxNumber([5,15,20]) should return (20)", () => {
        expect(maxNumber([5,15, 20])).to.be.equal(20);
    })
})