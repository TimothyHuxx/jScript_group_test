const doubleInteger = require("../src/doubleInteger_Func_Mariana");
const expect = require("chai").expect;

describe("Test suit for doubleInteger function", () => {
    it("doubleInteger(2) should return (4)", () => {
        expect(doubleInteger(2)).to.be.equal(4);
    })
})