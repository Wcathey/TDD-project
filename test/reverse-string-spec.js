const chai = require("chai")
const expect = chai.expect;
const reverseString = require("../problems/reverse-string.js");

describe("reverseString", function() {
    it("should reverse the string", function() {
        let result = reverseString('fun');
        expect(result).to.equal("nuf");
    })
})

