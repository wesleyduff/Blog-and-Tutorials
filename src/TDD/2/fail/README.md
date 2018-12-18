# Writing our First Failing Test
In this tutoral we are going to setup our code to provide us our first failing test.

## Rules
- No production code should be written till there is a failing unit test.
- The first test should be the simplest failing test case, and that includes compiling.
- The first test should be just enough to make the test fail.
- The production code written to make the test pass should be just enough production code to full fil the test case.

### Steps 
- Create a new folder called "tests" inside out app folder
```
$ mkdir tests && cd tests
```
- Create a new javascript file that follows this naming convention  
We name ours **firstTest.spec.js**
```
<name of file>.spec.js
```
- Import the necessary modules into our test
```JavaScript
const   chai = require('chai'),
        expect = chai.expect;
```
- Add your first test suite
```
describe('TDD Tutorial - session 2 --> ', () => {
    
    
})
```
- Add your first test block
```
it('Should load our date module', () => {

})
```
- Now we have our first test suite and test block. Next we need to write our code to expect our *date* module should be loaded.
```
it('Should load our date module', () => {
    try{
        const dateModule = require('./modules/date.js');
    } catch(exception){
        assert.fail(exception);
    }
});
```
- When you run your test you should see
```
AssertionError: Error: Cannot find module './modules/date.js'
    at Context.it (src/TDD/2/app/tests/firstTest.spec.js:11:20)
```

### SUCCESS
You have written your first failing test.  
You are well on your way to becomming a great test driven developer.