# Is the number colorful?

## Release / Update date
**05/02/2020**

## Description
Write a function `isColorful` which **takes a number** as argument and **returns true if the number is colorful**, false otherwise.

A colorful number is a number where all the products of consecutive subsets of digit are different. Confused? Here are two examples:
- 263 is a colorful number because (2, 6, 3, 2x6, 6x3, 2x6x3) are all different
- 236 is not because (2, 3, 6, 2x3, 3x6, 2x3x6) has 6 twice

Examples:
```javascript
isColorful(263)
//returns true

isColorful(236)
//returns flase
```

## Requirements
- Pass all the tests
- To run the tests: `mocha myFile.test.js`

## Author
diogo@wildcodeschool.pt

[Slack me](https://app.slack.com/client/T6SG2QGG2/GHP34QVV3/user_profile/UHCFSA63T)
