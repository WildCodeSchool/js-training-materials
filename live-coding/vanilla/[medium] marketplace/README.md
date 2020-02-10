# Vanila JS markeplace

## Release / Update date
**10/02/2020**

## Description
Create the homepage of a marketplace for used items. It render a list of items and shows the total € euros in the navbar. Users can add and remove items from the cart.

**Work only on `marketplace.js`**, **DO NOT** edit `index.html`, `style.css` or any other file. 

1. create an array of objects - `allItems`

The array should have 2 items.

Each item should have a name, price and isInCart:
```javascript
{
    name: 'Spiderman t-shirt L',
    price: 16,
    isInCart: true
}
```

2. create a function `renderItems` that inserts `allItems` into the DOM

Iterate over `allItems` and append each one to `#itemList`

3. create a function `renderTotal` that inserts the total into the DOM

Calculate the sum of the price of items in `allItems` and insert it in `#cartTotal`

4. create a function `render` that calls `renderItems` and `renderTotal`.

Call `render` when the page loads.

5. create a function `itemElement` that **takes and item object** and returns a **HTML element** that looks like this:
```html
<li>
    <p>Used car mat, 9€</p>
    <button>Add to cart</button>
</li>
```
Call this function in `renderItems`. Don't worry about the text in `<button/>` for now.

6. create a function `itemElementButton`that **takes and item object** and returns a **HTML element** that looks like this:
```html
    <button>Add to cart</button>
    or
    <button>Remove</button>
```
The text changes with `isInCart`for each item.

Call this function in `itemElement`.

7. create a function `toggleAddToCart` that **takes and item object**.

This function should be **called when an `itemElementButton` is cliked.**

Iterate over `allItems` and toggle `isInCart`(true/false) for the item that was clicked.

Call `render` at the end;

### Note:
To run a server `cd` into this folder and run `live-server`.

## Requirements
- selecting a new value i the dropdown shows GIFs of that category only.
- when the page loads cat GIFs should be showing.

## Author
diogo@wildcodeschool.pt

[Slack me](https://app.slack.com/client/T6SG2QGG2/GHP34QVV3/user_profile/UHCFSA63T)