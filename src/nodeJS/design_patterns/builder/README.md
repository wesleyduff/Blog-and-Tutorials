![Builder Pattern](https://github.com/wesleyduff/Blog-and-Tutorials/blob/master/src/nodeJS/design_patterns/builder/Builder-measuring.jpg)

# Builder Patter - from Gang of Four : GoF
**intent**: "Separate the construction of a complex object from its preresentation so that the same 
construction process can create different representations."

## Why use the Builder Pattern?
Telescoping Constructor Promblem
**example**: 

const BillTheManager = new Account('Bill', true, true, true, true, 15)
- ? What does true, true, true, true, 15 mean?

### Builder example
var bill = new PersonBuilder('bill').makeEmployee().makeManager().makePartTime().giveMoney(200)

Review the code folder to see how you can implement a builder.

#### How to run the example 
- cd into the code folder
- in the terminal run : node index.js
