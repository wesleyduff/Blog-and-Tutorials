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

Creating a promise.

```javascript

let myPromise = new Promise((resolve, reject) => {
  //do something with resolve and rejected
  let fakeObj = {test: "example"};
  if(typeof fakeObj === 'object'){
    resolve(fakeObj);
  } else {
    reject({
      message: "typeof 'fakeObj' was not of type object",
      cssStyle: "danger",
      stackTrace: "myPromise line 31"
    })
  }
});

//handlers for myPromise
myPromise
.then(val => console.log("resolved value:", val))
.catch(err => console.log("rejected err:", err));

```
[codepen](http://codepen.io/anon/pen/QdErXB)

When you handle resolve or reject, you can reject or resolve any JavaScript object (string, number, function, object literal)

#### .then()
Always returns a Promise, allows you to chain method calls.  
If a .then() returns a value, the value is automatically wrapped in a promise and unwrapped to pass the value to future .then() methods for further chaining.

Two parameters are optional but at least one has to be provided.  
The first parameter is a function that gets called when a promise has been resolved (successful).  
The second parameter is a function that gets called when a promise has been rejected (failure).  
By omitting the first parameter and passing in a **null** value, you can achieve the same effect as if you were catching the error with **.catch()**  

Example:
```javascript

//null for resolve method and reject method added.
//works the same as .catch()
let autoResolvePromise = new Promise((resolve, reject) => resolve(5)); //this a promise that gest rosolved right away.

autoResolvePromise
  //leaving off the second parameter for an error
  .then(val => console.log("fulfilled:", val))
  //setting null as the first parameter and just accepting rejected state, just like .catch()
  .then((null, err) => console.log("rejected:", err));


```

You can also handle errors in a better way by throwing errors.
Anytime you throw an error inside a promise, the promise gets rejected at that moment.
If you are chaining .then() methods and throw an error inside of one, you get directed strait to the .catch() method of the promise resolution.

Example:
```javascript
//throwing exception causes promise to be rejected
let promiseThrowsException = new Promise((resolve, reject) => {
  if(true){
    throw new Error('rejected!'); //same as rejection
  } else {
    resolve(2);
  }
});

//.catch() handles the error thrown
promiseThrowsException
  .then(val => val + 2)
  .catch(err => console.log("error", err));
```
[codepen](http://codepen.io/anon/pen/ygJjrG)

```javascript
//Error thrown in .then() Example
let p2 = new Promise((resolve, reject) => {
  resolve(2);
});

p2.then(val => {
  return val++;
})
.then(val => {
  throw new Error('thrown in .then() method');
})
.catch(err => {
  console.log('ERROR : ', err);
});
```
[codepen](http://codepen.io/anon/pen/OWXZqx)

You can chain .then() methods because each returned value inside a .then() method is automatically wrapped into a new promise.
The value gets passed inside a promise and that promise is then unwrapped to provide its value to the next .then() method.

Example:
```javascript

let p = new Promise((resolve, reject) =>{
  resolve(4);
});

p.then(val => {
  console.log('val ---- 1 --- : ', val);
  return val;
})
.then(val => { //val
  val++;
  console.log('val ---- 2 --- : ', val);
})
```
[codepen](http://codepen.io/anon/pen/NdrMVM)

What if you need to make an ajax call inside the second .then() and provide that value to another .then()
Sometimes I have seen an instance where an async call would be made for an GUID, then we would need to make another async call to get the data for that GUID. Once that data comes back we may need to massage the data and map it to our own bindings.
Here is an advanced example of such a case.

```javascript
//simulate an async call that takes 1second
let p = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve({data: {GUID: 1001, data: []}});
  }, 1000);
});

p.then(val => {
  console.log('Our value before we make the next async call  : ', val);

  let p2 = new Promise((resolve, reject) => {
    //randomuser.me is a free api to build fake profiles
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        resolve(data);
      }
    });
  });

  //returning any value inside a .then() method wraps the value in a promise
  return p2.then(data => {
    //create a copy of val. That way we can see the differences in the console.
    let returnval = Object.assign({}, val);
    returnval.data = data;
    return returnval;
  });

}).
//the promise returned above is unwrapped and the value is provided
then(val => {
  console.log('this  data  can now be mapped here : ', val);
})
//catch any errors that happen
.catch(err => console.log('error : ', err));

```
[codepen](http://codepen.io/anon/pen/KaMowd)

###You can handle many async calls at once with promise.all.
Promise.all allows you to return all values from many async calls at one time.
Once *ALL* async calls have completed the "then" method gets invoked with an array of all resolved values.
**However**, if any async call throws an error, the .catch method will catch the error and invoke its own function.  
Here is an example of three objects that get resolved and their values passed.  

```javascript
//This document shows how to handle many async calls with the promise.all method.
const p1 = Promise.resolve(3),
  p2 = 1337,
  p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

const all_promises = [p1, p2, p3];

//handle all promises and return an array of results to the resolve method
Promise.all(all_promises).then(values => {
  console.log('Values : ', values);
  console.log('Is Array : ', values.hasOwnProperty(length) && typeof values === 'object');
});

```
[codepen](http://codepen.io/anon/pen/VPzevm)  

**Error Thrown** example where a .catch is used to catch all errors that might have happened during any async call.  
The first error that is throw causes the promise.all to break and move right into the catch method.  
Example : throwing error in second promise and catch method doing what it does best.  

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first promise success");
}),
  p2 = new Promise((resolve, reject) => {
    throw new Error('Thrown error in promise number 2');
  }),
  p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "third promise success never gets called");
  });

//Load up all the promises
Promise.all([p1, p2, p3])
  .then(result => {
    console.log('We do not get a result due to the error thrown in p2', result);
  })
  .catch(err => {
    console.log('-----------------ERROR -------------------------- \n We catch the error thrown in P2 \r\n err : ', err);
  });
```
[codepen](http://codepen.io/anon/pen/PWKZBB)




links:
+ [es6 defs on promises](https://tc39.github.io/ecma262/#sec-promise-objects)
+ [Wikipedia on Promises](https://tc39.github.io/ecma262/#sec-promise-objects)

*FAQs*
+ promise objects are **immutable**
+ we are guaranteed to receive a value (in contrast to events, which can raise race conditions)
+ promises start off in the pending state
 + promise is then fulfilled or rejected. This state is referred to as **settled** and is not pending any longer.
 + promise is then sent to one of two methods, fulfillReactions(result), rejectReactions(error) instead of success and failure actions.
+ Anytime you return a value from a **then** it is automatically wrapped in a promise.
+ If you throw an error inside a promise or inside a .then of a promise, the promise will be rejected and caught by the .catch() method.
