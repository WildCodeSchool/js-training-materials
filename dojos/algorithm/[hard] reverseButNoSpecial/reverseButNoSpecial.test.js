const assert = require('assert');
const reverseButNoSpecial = require('./reverseButNoSpecial');

describe('Reverse all characters except special chars', () => {
    it ('should work for a,b$c!', () => {
        expected = 'c,b$a!';
        actual = reverseButNoSpecial('a,b$c!');
        assert.strictEqual(expected, actual);
    });
    it ('should work for Ab,c,d$e!', () => {
        expected = 'ed,c,b$A!';
        actual = reverseButNoSpecial('Ab,c,d$e!');
        assert.strictEqual(expected, actual);
    });
    it ('should work for @a_bCd<e', () => {
        expected = '@e_dCb<a';
        actual = reverseButNoSpecial('@a_bCd<e');
        assert.strictEqual(expected, actual);
    });
});