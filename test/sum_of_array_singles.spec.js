const repeats = require("../src/sum_of_array_singles");
const expect = require("chai").expect;

describe("Test suit for repeats function", () => {
    it("repeats([4,5,7,5,4,8]) should return (15)", () => {
        expect(repeats([4,5,7,5,4,8])).to.be.equal(15);
    })
})
describe("Test suit for repeats function", () => {
    it("repeats([9, 10, 19, 13, 19, 13]) should return (19)", () => {
        expect(repeats([9, 10, 19, 13, 19, 13])).to.be.equal(19);
    })
})
describe("Test suit for repeats function", () => {
    it("repeats([16, 0, 11, 4, 8, 16, 0, 11]) should return (12)", () => {
        expect(repeats([16, 0, 11, 4, 8, 16, 0, 11])).to.be.equal(12);
    })
})
describe("Test suit for repeats function", () => {
    it("repeats([15, 17, 18, 11, 13, 18, 11, 13]) should return (22)", () => {
        expect(repeats([5, 17, 18, 11, 13, 18, 11, 13])).to.be.equal(22);
    })
})
describe("Test suit for repeats function", () => {
    it("repeats([5, 10, 19, 13, 10, 13]) should return (24)", () => {
        expect(repeats([5, 10, 19, 13, 10, 13])).to.be.equal(24);
    })
})
