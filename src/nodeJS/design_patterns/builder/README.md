# Builder Patter - from Gang of Four : GoF
**intent**: "Separate the construction of a complex object from its preresentation so that the same 
construction process can create different representations."

## Telescoping Constructor Promblem
**example**: 

var bill = new Person('bill', true, true, false, 200);
- ? What does true, true, false, 200, true mean?

### Builder example
var bill = new PersonBuilder('bill').makeEmployee().makeManager().makePartTime().giveMoney(200)

Review the code folder to see how you can implement a builder.