const assert = require('assert');
const firstRecurring = require('./firstRecurring');

describe('firstRecurring', () => {
    it('should load a function', () => {
        assert.strictEqual(typeof firstRecurring, 'function');
    });
    it(`should return 'b'`, () => {
        assert.strictEqual(firstRecurring('acbbac'), 'b');
    });
    it(`should return 'z'`, () => {
        assert.strictEqual(firstRecurring('bZz'), 'z');
    });
    it(`should return 'Z'`, () => {
        assert.strictEqual(firstRecurring('bzZ'), 'Z');
    });
    it(`should return 'a'`, () => {
        assert.strictEqual(firstRecurring('a b a'), 'a');
    });
    it(`should return undefined`, () => {
        assert.strictEqual(firstRecurring('abcdef'), undefined);
    });
})

