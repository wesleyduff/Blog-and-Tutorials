# Write a Passing Test
We are now going to take our failing test and write just enough production code to make it pass.

Our failing test is failing because the test cannot find the module **dates.js**  
Lets create the file now
- inside our app folder
```
$ mkdir modules && cd modules && touch dates.js

```
- inside dates.js. We use the module design pattern to return an IIFE
```
const dates = (() => {

    return {

    }

})();

module.exports = dates;
```
- We needed to update our test method to point to the correct file. This is what our test should look like now
```
const   chai = require('chai'),
        expect = chai.expect,
        assert = chai.assert;

describe('TDD Tutorial - session 2 --> ', () => {

    it('Should load our date module', () => {
        try{
            const dateModule = require('../modules/dates');
        } catch(exception){
            assert.fail(exception);
        }

    });

})
```
- Now run your test again and you should have a passing test.

### We have now completed our first passing test.