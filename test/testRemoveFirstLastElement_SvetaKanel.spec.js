const removeFirstLastCharacter = require("../src/removeFirstLastElement_SvetaKanel");
const expect = require("chai").expect;

describe("Test suit for function that should remove the first and last character", () => {
   it("removeFirstLastCharacter('1,2,3')) should return ('2')", () => {
        expect(removeFirstLastCharacter('1,2,3')).to.be.equal('2');
    })

    it("removeFirstLast('1,2,3,4') should return ('2 3')", () => {
        expect(removeFirstLastCharacter('1,2,3,4')).to.be.equal('2 3');
    })
    
     it("removeFirstLast('1,2,3,4,5') should return ('2 3 4')", () => {
         expect(removeFirstLastCharacter('1,2,3,4,5')).to.be.equal('2 3 4');
     })
})    