const assert = require('assert');
const nearestFromCenter = require('./nearestFromCenter');

describe('nearestFromCenter', () => {
    it('should load a function', () => {
        assert.strictEqual(typeof nearestFromCenter, 'function');
    });
    it('should return [[0, 0], [3, 1]]', () => {
        const actual = nearestFromCenter([[0, 0], [3, 1], [5, 4]], [1, 2], 2);
        const expected = [[0, 0], [3, 1]];
        assert.deepEqual(actual, expected);
    });
    it('should return [[2, 3], [4, 5], [5, 1]]', () => {
        const actual = nearestFromCenter([[2, 3], [4, 5], [5, 1], [6, 1]], [3, 4], 3);
        const expected = [[2, 3], [4, 5], [5, 1]];
        assert.deepEqual(actual, expected);
    });
    it('should return [[3, 2], [2, 5]]', () => {
        const actual = nearestFromCenter([[3, 2], [6, 6], [2, 5], [1, 5]], [4, 4], 2);
        const expected = [[3, 2], [2, 5]];
        assert.deepEqual(actual, expected);
    });
})
