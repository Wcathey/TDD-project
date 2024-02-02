const chai = require("chai")
const expect = chai.expect;
const reverseString = require("../problems/reverse-string.js");
let result;
beforeEach(() => {
     result = "fun"
})
describe("reverseString", function() {
    it("should reverse the string", function() {

        expect(result).to.equal("nuf");
    })
})
