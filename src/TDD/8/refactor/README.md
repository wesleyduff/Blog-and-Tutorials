# Adding a stub to our test
Open our test file and lets create a new test suite. 
- Name the test suite *Failing API call*.

Create a new testcase.
- Name it *Should handle a failure with a console.error when the api returns a failing response*.

Once we have those initial peaces setup we need to setup our test suite with our sandbox and variables. This should be old hat by now.
- create a sandbox
- add a stub to the sandbox
- cleanup our sandbox when all the tests in the test suite have been called.
- write our test to make create a stub that rejects when called
```
 describe('Failing API call', () => {
    let sandbox,
        swapiStub;

    before(() => {
      sandbox = sinon.createSandbox();

      //spies
      swapiStub = sandbox.stub(swapiModule, 'get');
    });

    after(() => {
      sandbox.restore();
    })


    it('Should handle a failure with a console.error when the api returns a failing response', () => {

      swapiStub.rejects({message: 'Fake failure test'});

        return swapiModule.get('http://this.does.not.matter.com')
          .then(result => {
            assert.fail('Should not execute, our test is to make sure your api failure is handled.');
          })
          .catch(exception => {
            expect(exception.message).to.equal('Fake failure test')
          });

    });

  });
```
In our test we use a stub to reject the promise that our production code expects to return. We then capture the rejection from the promise and verify our stub was successful.  
In reality, this is not a good test. This test only shows you how to make a stub and verifies the stub was written correctly. In a real test we would want to stub out a method to return, reject or resolve our method. We could also use the stub to execute a function that performs some kind of action then returns a value we require for our test to function properly.

