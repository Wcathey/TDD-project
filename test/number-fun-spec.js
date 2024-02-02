const chai = require('chai');
const expect = chai.expect;
const {returnsThree, reciprocal} = require('../problems/number-fun')
let num = 8;


describe('returnsThree', function() {
    it('returns 3', function() {
        const three = 3
        expect(three).to.equal(3)
    })

})



describe('reciprocal', function() {
    it('should intake a number', function() {
        expect(num).assert.isNotNan
    })
    it('should return reciprocal of number', function() {
        let result = reciprocal(num)
        expect(result).to.equal(1/num)
    })
})
