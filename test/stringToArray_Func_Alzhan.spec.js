const stringToArray = require("../src/stringToArray_Func_Alzhan");
const expect = require("chai").expect;

describe("Test suit for stringToArray function", () => {
    it("stringToArray('Robin Singh') should return (['Robin', 'Singh'])", () => {
        expect(stringToArray('Robin Singh')).to.be.eql(["Robin", "Singh"]);
    })

    it("stringToArray('I love arrays they are my favorite') should return (['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite'])", () => {
        expect(stringToArray('I love arrays they are my favorite')).to.be.eql(["I", "love", "arrays", "they", "are", "my", "favorite"]);
    })
})