class Counter {
    // your code here
}

const countLetters = (word) => {
    const counter = {};

    word.split('').forEach(letter => {
        counter[letter] ? ++counter[letter] : counter[letter] = 1;
    });
    return counter;
}

module.exports = Counter;
