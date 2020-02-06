const assert = require('assert');
const countLetters = require('./countLetters');

describe('countLetters', () => {
    it('should load a function', () => {
        assert.strictEqual(typeof countLetters, 'function');
    });

    it('should work for One', () => {
        assert.strictEqual(countLetters('one')['o'], 1);
        assert.strictEqual(countLetters('one')['n'], 1);
        assert.strictEqual(countLetters('one')['e'], 1);
    });
    
    it('should still work if string has spaces', () => {
        assert.strictEqual(countLetters('so so')['s'], 2);
        assert.strictEqual(countLetters('so so')['o'], 2);
    });
    
    it('should be case sensitive', () => {
        assert.strictEqual(countLetters('Miami')['M'], 1);
        assert.strictEqual(countLetters('Miami')['m'], 1);
    });

    it('should work for an empty string', () => {
        assert.strictEqual(typeof countLetters(''), 'object');
        assert.strictEqual(Array.isArray(countLetters('')), false);
    });
    
    it('should work for undefined', () => {
        assert.strictEqual(typeof countLetters(undefined), 'object');
        assert.strictEqual(Array.isArray(countLetters(undefined)), false);
    });
})