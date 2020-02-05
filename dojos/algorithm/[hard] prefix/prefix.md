
# Find the Prefixes

## Release / Update date
**05/02/2020**

## Description
Write a function `prefix`, that **takes an array of 2 strings** and returns an array with the 2 string. The output strings are **the smallest prefix needed to tell the words apart**.

Examples:
```javascript
prefix(['one', 'two'])
//returns ['o', 't']

prefix(['arch', 'animal'])
// returns ['ar', 'an']

prefix(['rice', 'rivet'])
// returns ['ric', 'riv']
```

## Requirements
- Pass all the tests
- To run the tests: `mocha myFile.test.js`

## Author
diogo@wildcodeschool.pt

[Slack me](https://app.slack.com/client/T6SG2QGG2/GHP34QVV3/user_profile/UHCFSA63T)


accepts an array of strings
returns an array of strings
the ouput strings are the smallest suffix needed to tell the words apart
e.g.:
['one', 'two'] -> ['o', 't']
['arch', 'animal'] -> ['ar', 'an']
['rice', 'rivet'] -> ['ric', 'riv']
