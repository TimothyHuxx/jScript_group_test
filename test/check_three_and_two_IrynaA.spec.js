const checkThreeAndTwo = require("../src/check_three_and_two_IrynaA");
const expect = require("chai").expect;

describe("Test suit for checkThreeAndTwo function", () =>{
    it ("checkThreeAndTwo(['a', 'a', 'a', 'b', 'b']) should return(true)",() => {
        expect(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b'])).to.be.equal(true);
    })
})

describe("Test suit for checkThreeAndTwo function", () =>{
    it ("checkThreeAndTwo(['a', 'c', 'a', 'c', 'b']) should return(false)",() => {
        expect(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b'])).to.be.equal(false);
    })
})

describe("Test suit for checkThreeAndTwo function", () =>{
    it ("checkThreeAndTwo(['a', 'a', 'a', 'a', 'a']) should return(false)",() => {
        expect(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a'])).to.be.equal(false);
    })
})

describe("Test suit for checkThreeAndTwo function", () =>{
    it ("checkThreeAndTwo(['c', 'a', 'b', 'a', 'a']) should return(false)",() => {
        expect(checkThreeAndTwo(['c', 'a', 'b', 'a', 'a'])).to.be.equal(false);
    })
})

