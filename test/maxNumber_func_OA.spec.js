const maxNumber = require("../src/maxNumber_func_OA");
const expect = require("chai").expect;

describe("Test suit for maxNumber function", () => {
    it("maxNumber([5, 10, 15]) should return (15)", () => {
        expect(maxNumber([5, 10, 15])).to.be.equal(15);
    })
    it("maxNumber([25, 12, 1]) should return (25)", () => {
        expect(maxNumber([25, 12, 1])).to.be.equal(25);
    })
    it("maxNumber([40, 40, 5]) should return (40)", () => {
        expect(maxNumber([40, 40, 5])).to.be.equal(40);
    })
})