# Sort an Array of Objects by Key

## Release / Update date
**30/01/2020**

## Description
Write a function sortByKey that takes an array (of objects) and and optional key.

If no key is given, sort the array by name, otherwise sort by given key.

Sort alphabetically or in increasing order.

Example:
```javascript
const arr = [
    { name: 'Charlie', age: 38 },
    { name: 'Bob', age: 19 },
    { name: 'Alice', age: 32 },
];

sortByKey(arr);
// returns:
[
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 38 },
]

sortByKey(arr, 'age');
// returns:
[
    { name: 'Bob', age: 19 },
    { name: 'Alice', age: 32 },
    { name: 'Charlie', age: 38 },
]
```


## Requirements
- Pass all the tests
- To run the tests: `mocha myFile.test.js`

## Author
diogo@wildcodeschool.pt

[Slack me](https://app.slack.com/client/T6SG2QGG2/GHP34QVV3/user_profile/UHCFSA63T)
