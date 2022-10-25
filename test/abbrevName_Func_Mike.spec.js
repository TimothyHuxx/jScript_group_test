const abbrevName = require("../src/abbrevName_Func_Mike");
const expect = require("chai").expect;

describe("Test suit for abbrevName function", () => {
    it("abbrevName('Sam Harris') should return ('S.H.')", () => {
        expect(abbrevName('Sam Harris')).to.be.equal('S.H');
    })

    it("abbrevName('Misha Anikin') should return ('M.A.')", () => {
        expect(abbrevName('Misha Anikin')).to.be.equal('M.A');
    })
})