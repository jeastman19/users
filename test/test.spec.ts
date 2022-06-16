import assert from 'assert'

// const assert = require('assert')

describe('Array', () => {
    describe('#indexOf', () => {
        it('should return -1 when the valus is not present', () => {
            assert.equal([1,2,3].indexOf(4), -1)
        })
    })
})
