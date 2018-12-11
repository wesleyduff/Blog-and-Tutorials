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

Run your test and you will see it failed. Why did it fail? 

Here are a couple things you can do to further debug your method. This is very handy because testing allows you to test methods individually instead of having to run your entire codebase to test one method.

- Add a break point on your test that executes your method.
- Add a break point in your method of where you think the error has occured.
- Make changes and try again.

I advise you to set a break point on the callee of your method within you testcase. Then step through your method and find the error.

> Rembember....
>> A method is a function inside our object. Each function should be small and do one thing and one thing well. 

When you step through your code, there should not be more than a few lines to check.

---

**Method fails because we have not finished writing it yet.**  
This is good because we are still on the track of TDD. *Red* light *Green* light *Refactor*

Lets update our **getFormattedDate** now.

```
getFormattedDate: (date) => {
   return `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`
}
```

Our method now returns a string and our test should pass.