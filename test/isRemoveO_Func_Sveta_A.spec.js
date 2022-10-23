const isRemoveO = require("../src/isRemoveO_Func_Sveta_A");
const expect = require("chai").expect;

describe("Test suit for isRemoveO function", () => {
    it("isRemoveO('hello world') should return ('hell wrld')", () => {
        expect(isRemoveO('hello world')).to.be.equal('hell wrld');
    })
})