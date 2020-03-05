const assert = require('assert');
const isColorful = require('./isColorful');

describe('isColorful', () => {
    it('Should load a function', () => {
        assert.strictEqual(typeof isColorful, 'function');
    });
    it('Should return true', () => {
        assert.strictEqual(isColorful(263), true);
    });
    it('Should return false', () => {
        assert.strictEqual(isColorful(236), false);
    });
    it('Should return false', () => {
        assert.strictEqual(isColorful(132), false);
    });
    it('Should return true', () => {
        assert.strictEqual(isColorful(4327), true);
    });
})