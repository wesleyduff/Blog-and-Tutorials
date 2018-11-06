const   buyNowSingleton = require('./buyNowSingleton'),
        Cart            = require('./Cart');

const cart1 = buyNowSingleton.getInstance();
const cart2 = buyNowSingleton.getInstance();

if(cart1 === cart2){
    console.log(`cart 1 and cart 2 are the same object : ${typeof cart1} : ${typeof cart2}`)
}

console.log(`${cart1 instanceof Cart}`)
console.log(`${cart2 instanceof Cart}`)

console.log(`${cart1.getItems()}`)

cart1.addItem({name: 'item1', description: 'test item'});

console.log(`${cart1.getItems()}`)
console.log(`${cart2.getItems()}`)

console.log(`${cart1.getItems() === cart2.getItems()}`)