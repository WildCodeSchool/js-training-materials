'use strict';

const assert = require('assert'),
    strTolower = require('./strToLower');

describe('str to lower', () => {
    it('should be loaded', () => {
        assert.equal(true, true);
    });

    it('should return a', () => {
        assert.equal(strTolower('A'), 'a');
    });

    it('should return ab', () => {
        assert.equal(strTolower('AB'), 'ab');
    });

    it('should return ab', () => {
        assert.equal(strTolower('aB'), 'ab');
    });

    it('should return a+b', () => {
        assert.equal(strTolower('A+B'), 'a+b');
    });

    it('should return je suis le test ultime', () => {
        assert.equal(strTolower('UltImate TesT'), 'ultimate test');
    });
});