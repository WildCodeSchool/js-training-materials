const assert = require('assert');
const groupByLength = require('./groupByLength');

describe('groupByLength', () => {
    it('should load a function', () => {
        assert.strictEqual(typeof groupByLength, 'function');
    });

    it('should return an array', () => {
        assert.strictEqual(Array.isArray(groupByLength([])), true);
    })
    
    it('should work for Hello World', () => {
        const actual = groupByLength(['Hello', 'World']);
        const expected = [[ 'Hello', 'World']];
        assert.deepEqual(actual, expected);
    })

    it('should work for state of the art', () => {
        const actual = groupByLength(['State', 'of', 'the', 'art']);
        const expected = [['of'], [ 'the', 'art'], ['State']];
        assert.deepEqual(actual, expected);
    })
    
    it('should work for Human After World', () => {
        const actual = groupByLength(['Human', 'after', 'all']);
        const expected = [['all'], [ 'Human', 'after']];
        assert.deepEqual(actual, expected);
    })

    it('should work when an item of the array is empty', () => {
        const actual = groupByLength(['', 'thepreviousisempty']);
        const expected = [[''], [ 'thepreviousisempty']];
        assert.deepEqual(actual, expected);
    })
})