const removeChar = require("../src/removeFirstAndLastChar_Func_Liliia");
const expect = require("chai").expect;

describe("removeChar", () => {
    it("removeChar('country') should return ('ountr')", () => {
      expect(removeChar('country')).to.be.equal('ountr');
    })

    it("removeChar('person')) should return ('erso')", () => {
        expect(removeChar('person')).to.be.equal(('erso'));
      })
})