const assert = require('assert'); 
const arabicToRoman = require('./arabicToRoman'); 

describe('Convert arabic numbers to roman numerals', _ => {

	it('arabicToRoman should be a function', () => {
		assert.equal(typeof arabicToRoman, 'function');
	});

	it('should return I when given 1', () => {
		assert.equal(arabicToRoman(1), 'I');
	}); 

	it('should return IV when given 4', () => {
		assert.equal(arabicToRoman(4), 'IV');
	}); 
	
	it('should return V when given 5', () => {
		assert.equal(arabicToRoman(5), 'V');
	}); 
	
	it('should return IX when given 9', () => {
		assert.equal(arabicToRoman(9), 'IX');
	}); 

	it('should return XX when given 20', () => {
		assert.equal(arabicToRoman(20), 'XX');
	}); 

	it('should return MMXVII when given 2017', () => {
		assert.equal(arabicToRoman(2017), 'MMXVII');
	}); 

}); 
