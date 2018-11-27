# Promises  
How should we use promises?

Many theories are out there on best practices. From my many years of experience I have come up with this pattern.

- A promise SHOULD
  - return an object, either through a resolve or a reject method.
  - The object should contain an HTTP code: 200, 303, 404, 500 etc...
  - The object should contain a "result" that includes the result of the promise
  
- The callee of the promise should be wrapped with a try catch if async await is being used.
- The callee of the promise should use *then* and *catch*, if not using async await

You can see an example of *try catch* and *async await* by reviewing the file **async_await_try_catch.js**