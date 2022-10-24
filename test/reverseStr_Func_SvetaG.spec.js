const reverseStr = require("../src/reverseStr_Func_SvetaG");
const expect = require("chai").expect;

describe("Test suit for reverseStr function", () => {
    it("reverseStr(Abc) should return (cbA)", () => {
        expect(reverseStr("Abc")).to.be.equal("cbA");
    })
})
