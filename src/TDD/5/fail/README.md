#Writing our Failing testcase
We left off from the last module showing how we can use assert and expect to test what our methods return.

This module we will discuss how we can expect that our methods are called with the correct arguments. 

We will continue working with our *getFormattedDate* method. 

We have checked that our import is an object and our method exists.
We have checked that our returned type is a string.  
We have checked that our return value is in the proper format.

What else can we check? Think how a fellow developer may use this method. The method takes a date a its only argument and runs date specific methods on that argument. We should write a test that makes sure the parameter passed to our method is of type **Date**.  
We should also keep in mind, how will we let our fellow developer know that a Date is the only possible parameter.  
Adding a section to validate that a date was provided and return an error if the argument provided is not of type date.

Lets write a test to cover this.

```
it('Should throw an exception if the paramter given is not of type Date', () => {
        
})
```
This will be a good start to our failing test.  
Now lets add more to our test. The first thing we need to do is create a sandbox.  
A **sandbox** is a an area we can play with, build up and destroy pretty easy. We do not want to create *spies*, *stubs* etc... witout being able to set everything back to the way it was.   
We create a sandbox by adding a *before* method at the top of our test suite. 
```
describe('TDD Tutorial - session 2 --> ', () => {
    
    before(() => {
        
    })
    
    ...
```
What this does, is allow us to run a set of code *before* any other tests run. Kind of like a setup area.  
**note:** you can only have one *before* method in any test suite or nested test suite. (before methods can be added to nested test suites)  

Lets add our Sinon sandbox to our before method.
```
before(() => {
  var sandbox = sinon.createSandbox();
})
```
Don't forget to require your sinon module at the top `const sinon   = require('sinon');`  

We also need to reset our sandbox. We can perform this with the *after* method.

```
let sandbox;

before(() => {
   sandbox = sinon.createSandbox();
})

after(() => {
    sandbox.restore();
})
```
We moved the varibale *sandbox* outside of the before method so after can access the scope of the variable as well.  
Calling restore method on the sandbox *restores* all actions performed on the sandbox. This is like cleaning up after ourselves. If we do not, another test suite in another file could still be accessing our spies, stubs etc.. and cause errors. With errors like these, it is hard to debug.  

## Create our first SPY
Lets add a spy on our *getFormattedDate* method
```
let sandbox,
    getFormattedDateSpy;
before(() => {
   sandbox = sinon.createSandbox();

   getFormattedDateSpy = sandbox.spy(dateModule, 'getFormattedDate');
})
```