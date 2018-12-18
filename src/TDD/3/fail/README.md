# Adding More Tests

We want our dates module to return a formated date that matches MM-DD-YYYY

What do we need to do first?
- Add a test to call a method on our module that returns a date that returns a string that matches a regular expression of
  - 2 - 0-9 numbers 
  - followed by a "-"
  - follwed by 2 - 0-9 numbers
  - follwed by a "-"
  - followed by 4 - 0-9 numbers
  - should match full string and not parts
  
  
## Lets add our failing test now
We will add our test to our existing describe block
```
it('Should return a date as a string that matches format MM-DD-YYY', () => {
        
})
```
This will be our test. Next we need to write just enough of a test to fail. 

The first failure case would be, the method is not a function on our module. 

Lets wrtie our code to fail. And remember, in order to get information on what happend, we should wrap our code with a try catch.
```
it('Should return a date as a string that matches format MM-DD-YYY', () => {
  try{
      const dateModule = require('../modules/dates');
      dateModule.getFormattedDate(new Date());
  } catch(exception){
      assert.fail(exception)
  }      
})
```

### Run your test and you should see the test fail.
This is what you should see
```
AssertionError: TypeError: dateModule.getFormattedDate is not a function
```