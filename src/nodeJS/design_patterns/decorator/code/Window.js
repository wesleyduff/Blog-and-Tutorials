
class Window {

    constructor(width = 100, height = 100){
        this.width = width;
        this.height = height;
    }

    getHeight(){
        return this.height;
    }

    getWidth(){
        return this.width;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}

module.exports = Window;