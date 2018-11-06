class Cart {
    constructor(items = []){
        this.items = items;
    }
    addItem(item){
        this.items.push(item);
    }
    getItems(){
        return JSON.stringify(this.items, null, 2)
    }
}

module.exports = Cart;