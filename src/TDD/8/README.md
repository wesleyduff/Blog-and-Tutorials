# Mocking out large collaborators
Large collaborators cause for longer running tests. It is best to mock these methods out with a sinon stub or a sinon mock, depending on what you need to test.

## Sinon stub : Mocking out a method
Sometimes we are writing an integration test and need to test many methods in one controller method. If we need to test a failing case on the third method in our integration test, we can mock out the first two methods to return what we need, then the method we need to test the failing case can be mocked out to return a failure.

What is a stub?   
A [stub](https://sinonjs.org/releases/latest/stubs/) are spies with more features. Stubs allow you to manage the returned value.

When to use a stub?  
- Control a method’s behavior from a test to force the code down a specific path. Examples include forcing a method to throw an error in order to test error handling.
- When you want to prevent a specific method from being called directly (possibly because it triggers undesired behavior, such as a XMLHttpRequest or similar).

How to use a stub?  
Add a stub to your sandbox (good practice)  
```
const myStub = sandbox.stub(myObject, 'myMethodOnMyObject')
```
Now we can perform some basic functions that you will use majority of the time, **returns**, **resolves** and **rejects**.  
Example :   
```
const myStub = sandbox.stub(myObject, 'myMethodOnMyObject');
mystub.returns({name: 'John Doe'});
```
Now when myMethodOnMyObject gets executed, the returned value will be an object with a property of name with a value of John Doe. So, no matter what your stubbed out method did, it will now return what we told it to. This is a great way to test failing cases.

### Next : Stubbing out a method
This next module we will walk through how to stub out a method and add the stub to our sandbox.  
Continue onto [refactor](./refactor) to continue on with this module.



### What we have learned
Sinon
- spy
- stub
- sandbox

Mocha 
- before
- after

Chai
- assert
- expect

Nock
- reply
- replyWithEror

You should now be able to 
- return data when a thrid party api is called
- setup nested test suites in one test file
- assert and expect passing and failing cases
- make sure specific methods are called by spying on the object's methods
- return, resolve and reject methods using stubs.
