# Make our Date Method Pass
Now we need to write just enough production code to pass our failing unit test.

Our failing test is to make sure we have a method to return our date as a string.
- NOTE ** : We changed the name of our test to be more descriptive on what we are doing.
- changed the name to `Should have a method to return a date as a string that matches format MM-DD-YYY`

Lets create our method now

- open the dates.js file inside the modules folder
- Add the method name to our module
```

const dates = (() => {

    return {
        getFormattedDate: () => {}
    }

})();

module.exports = dates;
```
Notice we just added `getFormattedDate: () => {}`

This creates a new method on our module. 

## Run the test again to see it pass.
You should now see a passing test  

`Process finished with exit code 0`