const charToASSCIICode = require("../src/getASCIICode_Func_Anton");
const expect = require("chai").expect;

describe("Test suit for charToASSCIICode function", () => {
    it("charToASSCIICode(['a','b','c','d']) should return ([ { a: 97, b: 98, c: 99, d: 100 } ])", () => {
        expect(charToASSCIICode(['a','b','c','d'])).to.be.equal([ { a: 97, b: 98, c: 99, d: 100 }]);
    })
}) 