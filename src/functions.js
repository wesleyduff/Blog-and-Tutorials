function myNewFunction(endpoint='none', type='none'){
 this.config = {type, endpoint};
}

let test1 = new myNewFunction('yahoo.com', 'yahoo');

test1 instanceof myNewFunction
//
let test2 = myNewFunction()
test2 instanceof myNewFunction
console.log(test2)
//
let test3 = new myNewFunction()
test3 instanceof myNewFunction
console.log(test3)

