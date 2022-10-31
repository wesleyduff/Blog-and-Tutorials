/**
* Object Literal 
*/
var myObject = { foo: 'foo', bar: 'bar' }

/**
* Object create
*/
var myCreateObject = new Object({foo: 'foo', bar: 'bar'})

/**
* concatenate create new object
*/
var myNewObject = Object.assing({test: myObject}, myCreateObject)

/**
* spread object
*/
var myNewObject2 = {...myNewObject}

/**
* Properties of all data-types and data-structures : they are all objects
*/
var chat ='hello';
var person ={
  name: ["Bob", "Smith"],
  run: function() { console.log(`I am running : ${this.name[0]}`)},
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
    talk: () => { console.log(this.chat)}
};

