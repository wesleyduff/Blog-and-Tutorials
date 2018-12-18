# Expecting Behavior

Chai provides a method called **expect**. You can think of expect like this. I expect that my first name is John. If my name is John, then the value of my expect will be true. 

Expect has a large library of methods. Those can be found [here](https://www.chaijs.com/api/bdd/)
Assert is a little different and you can read more about assert [here](https://www.chaijs.com/api/assert/)

Here are a few features of the expect library we will be using
- to
- be
- is
- has

## Expect a truthy value

Lets add an expect to our first test method.

```
it('Should load our date module', () => {
    try{
        const dateModule = require('../modules/dates');
        expect(dateModule).to.be.an('object')
    } catch(exception){
        assert.fail(exception);
    }

});
```

Here we are checking if we can load a module. However, each test must have an assert, should or expect. In this example we are using ane expect to justify our test case. We **expect** our dateModule *to* *be* *an* **object**. 

Our dateModule is following the [module pattern](https://github.com/wesleyduff/Blog-and-Tutorials/tree/master/src/nodeJS/design_patterns/module). The returned type of the module pattern is an object. So, if we ask *You are an object, right?*, then we should get back a true or a false value.

If you run the test above, you will see it passes.

**We can do the same for our second test.**  
Because we expect the returned value to be a string.

Lets make that addition now. *This is part of our refactor stage*

```
 it('Should have a method to return a date as a string that matches format MM-DD-YYY', () => {
        try{
            const dateModule = require('../modules/dates');
            const returnedValue = dateModule.getFormattedDate(new Date());

            expect(returnedValue).to.be.a('string');
        } catch(exception){
            assert.fail(exception)
        }
    })
```

You will see the test fail. This is what we want, at this stage. 

Continue onto the pass folder to work the problem.