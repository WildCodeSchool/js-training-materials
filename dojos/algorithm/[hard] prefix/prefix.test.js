const assert = require('assert');
const prefix = require('./prefix');

describe('prefix', () => {
    it('should load a function', () => {
        assert.strictEqual(typeof prefix, 'function');
    });
    it(`should return ['de', 'dr']`, () => {
        assert.deepStrictEqual(prefix(['dean', 'dream']), ['de', 'dr']);
    });
    it(`should return ['dog', 'don']`, () => {
        assert.deepStrictEqual(prefix(['dog', 'donut']), ['dog', 'don']);
    });
    it(`should return ['app', 'apr ]`, () => {
        assert.deepStrictEqual(prefix(['apple', 'apricot']), ['app', 'apr']);
    });
    it(`should return ['o', 't ]`, () => {
        assert.deepStrictEqual(prefix(['one', 'two']), ['o', 't']);
    });
})