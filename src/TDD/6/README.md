# Sinon : Checking if Method was Called
Sometimes we need to make sure a method has been called, once, twice, thrice or even more.  
To verify our method has been called "x" amount of times, we need to create a spy, or re-usse an existing spy, and verify the method has been called.

You can read more about spies and its functionality [here](https://sinonjs.org/releases/latest/spies/).

There are many options with spies. The one we are focusing in this module is **spy.calledOnce**.

```
assert(ourSpy.calledOnce, 'Our method should have been called exactly once');
```

Continue onto the (refactor)[./refactor] article and lets put this to use.