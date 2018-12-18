# Sinon : Spies 
**What is a Spy?**
A test spy is a function that records arguments, return value, the vlaue of this and exception throw for all its calls. There are two types of spies: Some are anonymous functions, while others wrap methods that already exist in the system under test.

**When to use a spy**
Use a spy when you need to spy on a function. Know how many times it was called, for example. Know what parameters were passed to your function. 

**When not to use a spy**
When you need to mock out a function or have your function perform an action that the function was not written to perform.

**How to create a Spy**  
Best pracitce when creating spies is to add your spy to a sandbox. A sandbox is a container to add spies, stubs and other items. A sandbox is handy because it makes it very easy to reset any methods you may be spying on, stubing or mocking.

Example: 
```
const sinon = require('sinon');

const myObj = {
  myObjFunction : () => { console.log(' Real method ') }
}

const   sandbox = sinon.createSandbox(),
        mySpy   = sandbox.spy(myObj, 'myObjFunction');
```

We now have a spy on our `myObjFunction`.

Proceed onto [fail](./refactor) to start working out TDD process.