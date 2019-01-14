
# Refactoring and Passing Test

Run your test and you will see it failed. Why did it fail? 

## Best practices for debugging your test
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
getFormattedDate: (rawDate) => {
    const month = ("0" + (rawDate.getMonth() + 1)).slice(-2);
    const date = ("0" + rawDate.getDate()).slice(-2);
    return `${month}-${date}-${rawDate.getFullYear()}`
}
```

Our method now returns a string and our test should pass.

## Rethink Your Test Cases
Did you cover what really needs to be covered? The code coverage tool says you are good, but are you really. 

Our test covering *getFormattedDate* checks to make sure the method exits and it returns a string. What if someone changes this method to return a string of a formated date that is not what we want. We need to make sure our returned string matches our expected output. 

Lets add another expect to our test case to finish off our second test.  
**note:** You can add multiple expects and asserts to your test method. The first one that fails stops the interpretation of your testcase and does not test the asserts and expects below.
```
    it('Should have a method to return a date as a string that matches format MM-DD-YYY', () => {
        try{
            const   dateModule      = require('../modules/dates'),
                    returnedValue   = dateModule.getFormattedDate(new Date()),
                    regExMatcher    = /([0-9]{2})+-+([0-9]{2})+-+([0-9]{4})/g

            const actual = returnedValue.match(regExMatcher);

            expect(returnedValue).to.be.a('string');
            expect(actual.length).to.equal(1);
        } catch(exception){
            assert.fail(exception)
        }
    })
```

There are a few more tests we can write to fully cover this method. The next module to this TDD study will go over Sinon and specificaly Spies.