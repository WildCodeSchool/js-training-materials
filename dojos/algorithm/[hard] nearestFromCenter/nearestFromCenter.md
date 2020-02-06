# Nearest to center point

## Release / Update date
**05/02/2020**

## Description
Given a list of points, a central point, and an integer k, find the nearest k points from the central point.

Write a function `nearestFromCenter` which takes **3 arguments** - an array of arrays, an array and an integer - and returns an array of arrays.

Note: you may need an auxiliary function to calculate the distance between 2 points. That distance is given by

`d = sqrt((x1 - x2)² + (y1 - y2)²)`

Examples:
```javascript
const points = [[0, 0], [5, 4], [3, 1]];
const centralPoint = [1, 2];
const k = 2;

nearestFromCenter(points, centralPoint, k)
//returns [[0, 0], [3, 1]]
```

## Requirements
- Pass all the tests
- To run the tests: `mocha myFile.test.js`

## Author
diogo@wildcodeschool.pt

[Slack me](https://app.slack.com/client/T6SG2QGG2/GHP34QVV3/user_profile/UHCFSA63T)
