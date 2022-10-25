const sum = require("../src/sum_Arrays_Func_ArtemDe");
const expect = require("chai").expect;

describe("Test suit for sum function", () => {
    it("sum([1, 5.2, 4, 0, -1]) should return (9.2)", () => {
        expect(sum([1, 5.2, 4, 0, -1])).to.be.equal(9.2);
    })

    it("sum([]) should return (0)", () => {
        expect(sum([])).to.be.equal(0);
    })
})