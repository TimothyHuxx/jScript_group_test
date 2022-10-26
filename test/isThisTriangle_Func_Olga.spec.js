const isDivideBy = require("../src/isThisTriangle_Func_Olga");
const expect = require("chai").expect;

describe("Test suit for isTriangle function", () => {
    it("isTriangle(-12, 2, -6) should return (true)", () => {
        expect(isDivideBy(-12, 2, -6)).to.be.equal(true);
    })
})

function isTriangle(a,b,c) {
    return a + b > c && a + c > b && c + b > a;
 }