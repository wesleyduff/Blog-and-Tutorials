const Cart = require('./Cart');

const SingletonCart =(() => {
    let cart;

    const assignCart = () => {
        return new Cart();
    }

    return {
        getInstance: () => {
            if(!cart){
                cart = assignCart();
            }
            return cart;

        }
    }
})();

module.exports = SingletonCart;

