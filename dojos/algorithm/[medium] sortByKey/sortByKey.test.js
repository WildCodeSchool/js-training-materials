const assert = require('assert'); 
const sortByKey = require('./sort-by-key');

const users = [
    { name: 'Charlie', age: 38 },
    { name: 'Bob', age: 19 },
    { name: 'Alice', age: 32 },
];

describe('Sort By Key', _ => {
	it('should be a function', () => {
		assert.equal(typeof sortByKey, 'function');
	});

	it('should return an array', () => {
		assert.equal(Array.isArray(sortByKey([])), true);
    });
    
    it('should sort by name alphabetically', () => {
        const orderedByName = [
            { name: 'Alice', age: 32 },
            { name: 'Bob', age: 19 },
            { name: 'Charlie', age: 38 },
        ]
		assert.deepEqual( sortByKey(users), orderedByName);
    });
    
    it('should order by increasing age', () => {
        const orderedByAge = [
            { name: 'Bob', age: 19 },
            { name: 'Alice', age: 32 },
            { name: 'Charlie', age: 38 },
        ]
		assert.deepEqual( sortByKey(users, 'age'), orderedByAge);
    });

});