const plural = require("../src/plural_NataliaC");
const expect = require("chai").expect;

describe("plural", () => {
    it("plural(100) should return ('true')", () => {
        expect(plural(100)).to.be.equal('true');
    })

    it("plural(1) should return ('false')", () => {
        expect(plural(1)).to.be.equal('false');
    })

})