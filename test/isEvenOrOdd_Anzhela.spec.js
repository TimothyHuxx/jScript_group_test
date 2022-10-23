const isEvenOrOdd = require("../src/isEvenOrOdd_Anzhela");
const expect = require("chai").expect;

describe('Test suite for isEvenOrOdd function', () => {
    it('isEvenOrOdd(278) should return ("even")', () => {
        expect(isEvenOrOdd(278)).to.be.equal("even");    
    })

    it('isEvenOrOdd(145) should return ("odd")', () => {
        expect(isEvenOrOdd(145)).to.be.equal("odd");    
    })
})