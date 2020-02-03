const assert = require('assert');
const hyphenate = require('./conso-nants');

describe('hyphenate', () => {
    it('should load a function', () => {
        assert.strictEqual(typeof hyphenate, 'function');
    });
    it('should return hyp-hen', () => {
        assert.strictEqual(hyphenate('hyphen'), 'hyp-hen');
    });
    it('should return hel-lo wor-l-d', () => {
        assert.strictEqual(hyphenate('hello world'), 'hel-lo wor-l-d');
    });
    it('should return Hel-lo Wor-l-d', () => {
        assert.strictEqual(hyphenate('Hello World'), 'Hel-lo Wor-l-d');
    });
    it('should return In-ter-nationalization', () => {
        assert.strictEqual(hyphenate('Internationalization'), 'In-ter-nationalization');
    });
})