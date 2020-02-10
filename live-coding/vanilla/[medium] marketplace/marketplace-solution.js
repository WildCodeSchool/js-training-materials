const allItems = [
    {
        name: 'Signed Baseball Hat',
        price: 15,
        isInCart: true,
    },
    {
        name: 'Used sofa bed',
        price: 140,
        isInCart: false,
    }
]

const itemList = document.getElementById('itemList');
const cartTotal = document.getElementById('cartTotal');

const toggleAddToCart = (item) => {
    allItems.map(itm => {
        if(itm.name === item.name) {
            itm.isInCart = !itm.isInCart;
        }
        return itm; 
    })
    render();
};

const itemElementButton = (item) => {
    const itemElBtn = document.createElement('button');
    itemElBtn.innerText = item.isInCart ? 'Remove' : 'Add to cart';
    itemElBtn.addEventListener('click', () => toggleAddToCart(item))
    return itemElBtn;
}

const itemElement = (item) => {

    const itemEl = document.createElement('li');
    const itemElBtn = itemElementButton(item);

    itemEl.innerHTML = `<p>${item.name}, ${item.price}€</p>`;
    itemEl.appendChild(itemElBtn);

    return itemEl;
}

const renderItems = () => {
    if(!itemList) return;
    itemList.innerHTML = '';

    allItems.forEach((item) => {
        const itemEl = itemElement(item);
        
        itemList.appendChild(itemEl)
    })
}

const renderTotal = () => {
    if(!cartTotal) return;

    const total = allItems.reduce((acc, curr) => {
        return curr.isInCart ? acc + curr.price : acc;
    }, 0);
    cartTotal.innerText = total;
}

const render = () => {
    renderItems();
    renderTotal();
}

window.addEventListener('load', () => {
    render();
})
