# Mocking out large collaborators
Large collaborators cause for longer running tests. It is best to mock these methods out with a sinon stub or a sinon mock, depending on what you need to test.

## Sinon stub : Mocking out a method
Sometimes we are writing an integration test and need to test many methods in one controller method. If we need to test a failing case on the third method in our integration test, we can mock out the first two methods to return what we need, then the method we need to test the failing case can be mocked out to return a failure.

### Next : Stubbing out a method
This next module we will walk through how to stub out a method and add the stub to our sandbox.  
Continue onto [stubs](./stubs) to continue on with this module.
