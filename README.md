# OKR
## Promises
## Async Functions
## Strict Mode

### Promises

A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

An alternative to callbacks for delivering the results of an asynchronous computation.

Promise has been spec that has been created called [Promise/A+](https://promisesaplus.com/)

There are frameworks for you to use which include
+ [Q](https://github.com/kriskowal/q)
+ [Bluebird](https://github.com/petkaantonov/bluebird)
+ [RSVP](https://github.com/tildeio/rsvp.js)

With ES6 and Babel, there is no need to use a framework.

A promise can be in three states
+ pending
+ fulfilled
+ rejected

A promise is pending if it is neither fulfilled nor rejected.

```javascript

//anync func
function asyncFunction(){
  return new Promise(
    function(resolve, reject){
      if(x){
        resolve(result);
      } else {
        reject(result)
      }
    }
  )
}

//call async func as show
asyncFunction()
.then(result => {...})
.catch(error => {...});
```

#### .then()
Always returns a Promise, allows you to chain method calls.

Two parameters are optional but at least one has to be provided.
The first parameter is a function that gets called when a promise has been resolved (successful).
The second parameter is a function that gets called when a promise has been rejected (failure).
By omitting the first parameter and passing in a **null** value, you can achieve the same effect as if you were catching the error with **.catch()**



links:
+ [es6 defs on promises](https://tc39.github.io/ecma262/#sec-promise-objects)
+ [Wikipedia on Promises](https://tc39.github.io/ecma262/#sec-promise-objects)

*FAQs*
+ promise objects are **immutable**
+ we are guaranteed to receive a value (in contrast to events, which can raise race conditions)
+ promises start off in the pending state
++ promise is then fulfilled or rejected. This state is referred to as **settled** and is not pending any longer.
++ promise is then sent to one of two methods, fulfillReactions(result), rejectReactions(error) instead of success and failure actions.
+ Anytime you return a value from a **then** it is automatically wrapped in a promise.
+ If you throw an error inside a promise or inside a .then of a promise, the promise will be rejected and caught by the .catch() method.
