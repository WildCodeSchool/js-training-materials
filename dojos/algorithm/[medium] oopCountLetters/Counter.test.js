const Counter = require('./Counter');
const assert = require('assert');

describe('Counter', () => {
    it('should load a Counter class', () => {
        assert.strictEqual(typeof Counter, 'function');
    });
    
    it('should show 2 l\'s for hello', () => {
        const counter = new Counter('hello');
        assert.strictEqual(counter.howMany('l'), 2);
    });

    it('should show 2 l\'s for HElLo', () => {
        const counter = new Counter('HElLo');
        assert.strictEqual(counter.howMany('l'), 2);
    });
    
    it('should show 3 l\'s  and 2 o\'s for hello world', () => {
        const counter = new Counter('hello world');
        assert.strictEqual(counter.howMany('l'), 3);
        assert.strictEqual(counter.howMany('o'), 2);
    });
})
