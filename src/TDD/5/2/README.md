# Sinon and Spies
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
Couple of things to note here. Required our date module at the top of the file and used the variable everywhere we are requesting the date module.  
Added the *getFormattedDateSpy* variable under our sandbox variable.  
Now we have access to our spy in all of the tests under our test suite.
 
Now, lets put our spy into use. 
```
it('Should throw an exception if the parameter given is not of type Date', () => {
    const date = new Date();
    dateModule.getFormattedDate(date);

    assert(getFormattedDateSpy.calledWithExactly(date), 'Should have been called with only one parameter of date')
})
```
Here we are asserting and not expecting. The first parameter sent to an assert method should come out true, if it does not, the error message will be the second paramter you provide.  
Try adding a second parameter and see what happens. 

Tests should all pass now.

## Sinon Spy - Check that method has been called
Sometimes we need to make sure a method has been called. Say, we are required as a team to log all outgoing api calls. To make sure we abide by the team rules, we need to make sure our log method has been called at least once.  
Sinon spies provide a way to test this.  
Lets add some code to our application. 
- add a new module to modules called swapi.js
- add the code below to our file : **note** we are not following out TDD practice here, just so we can skip over what we have already learned and move onto the next bit.
This code calls a free third party api called SWAPI, Star Wars API.   
One method builds the URL based on our parameters, the other makes the reqeust to the API.
```
const request = require('request');

const swapi = (() => {

    return {
        buildUrl: (query) => {
            if(!query || !query.platform || !query.quantity){
                throw new Error('Arguments do not match expected values.')
            }
            let url = 'https://swapi.co/api/'
            switch(query.platform){
                case 'planets':
                    url = `${url}planets/${query.quantity}`;
                    break;
                case 'people':
                    url = `${url}people/${query.quantity}`;
                    break;
                default:
                    throw new Error('query.platform was not a property on query object.')
            }
            console.log(`URL called : -> ${url}`);
            return url;
        },
        get: (url) => {
            return new Promise((resolve, reject) => {
                request(url, (error, response, body) => {
                    if(error){
                        reject(`Error calling api : ${error}`);
                    }
                    resolve({result: body})
                })
            })
        }
    }

})();

module.exports = swapi;
```
We need to make sure our logger is called at least once with the URL that is being called. For this example we are just using the built in *console.log*  

Lets write our test to make sure this happens. 

```

```
### What we have learned
Sinon
- spy
- sandbox

Mocha 
- before
- after

Chai
- assert
- expect