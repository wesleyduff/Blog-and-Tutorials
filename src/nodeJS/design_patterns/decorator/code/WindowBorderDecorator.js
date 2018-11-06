

class WindowBoarder{
    constructor(window){
        this.window = Object.assign({}, {border: 1}, window)
    }

    toString(){
        return JSON.stringify(this, null, 2)
    }
}

module.exports = WindowBoarder;