# Count letters OOP

## Release / Update date
**03/02/2020**

## Description
1. Write a class Counter that **takes a string as argument in the constructor**. 

2. Create a property **occur** in the constructor that keeps an **object** in the form:
```
{
    [letter]: [number of times it appears in the string],
}
```
3. Create a count() that **takes a string (single letter) as argument** and returns the number of occurences of that letter in the initial string.

This class is used like this:
```javascript
const counter = new Counter('hello');

counter.count('h');
// returns 1

counter.count('l');
// returns 2

counter.occur;
// returns:
{
    'h': 1,
    'e': 1,
    'l': 2,
    'o': 1,
}
```

Note: in Counter.js, the function countLetters() is there to help you count words in a string. Use it or ignore it, up to you.

It returns an object like this one:

```javascript
{
    "h": 2,
    "e": 9,
    ...
}
```
## Requirements
- Pass all the tests
- To run the tests: `mocha myFile.test.js`

## Author
diogo@wildcodeschool.pt

[Slack me](https://app.slack.com/client/T6SG2QGG2/GHP34QVV3/user_profile/UHCFSA63T)
