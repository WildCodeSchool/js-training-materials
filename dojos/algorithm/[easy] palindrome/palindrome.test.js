const assert = require('assert');
const palindrome = require('./palindrome.js');

describe('palindrome test', () => {
    it('should be loaded', () => assert.equal(typeof palindrome, 'function'));

    it(
        'Should be true with "Racecar"',
        () => assert.equal(palindrome("Racecar"), true)
    );

    it(
        'Should be true with "Won\'t cat lovers revolt ? Act now!"',
        () => assert.equal(palindrome("Won't cat lovers revolt? Act now!"), true)
    );

    it('Should be false with "hello world"',
        () => assert.equal(palindrome("hello world"), false)
    );
});