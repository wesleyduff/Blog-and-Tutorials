## Sinon Spy - Check that method has been called
Sometimes we need to make sure a method has been called. Say, we are required as a team to log all outgoing api calls. To make sure we abide by the team rules, we need to make sure our log method has been called at least once.  
Sinon spies provide a way to test this.  
Lets add some code to our application. 
- add a new module to modules called swapi.js
- add the code below to our file : **note** we are not following out TDD practice here, just so we can skip over what we have already learned and move onto the next bit.
This code calls a free third party api called SWAPI, Star Wars API.   
One method builds the URL based on our parameters, the other makes the reqeust to the API.
```
const request = require('request');

const swapi = (() => {

    return {
        buildUrl: (query) => {
            if(!query || !query.platform || !query.quantity){
                throw new Error('Arguments do not match expected values.')
            }
            let url = 'https://swapi.co/api/'
            switch(query.platform){
                case 'planets':
                    url = `${url}planets/${query.quantity}`;
                    break;
                case 'people':
                    url = `${url}people/${query.quantity}`;
                    break;
                default:
                    throw new Error('query.platform was not a property on query object.')
            }
            return url;
        },
        get: (url) => {
            return new Promise((resolve, reject) => {
                request(url, (error, response, body) => {
                    if(error){
                        reject(`Error calling api : ${error}`);
                    } else {
                        resolve({result: body})
                    }
                })
            })
        }
    }

})();

module.exports = swapi;
```
We need to make sure our logger is called exactly once with the URL that is being called. For this example we are just using the built in *console.log*  

Lets write our test to make sure this happens.  
**note** We needed to restructure our test suites. 
- put all of the previous tests under a sub-test suite 
- put the new test under its own sub test suite. 
- require our new module

full code of new test and changes

```
const   chai        = require('chai'),
        expect      = chai.expect,
        assert      = chai.assert,
        sinon       = require('sinon'),
        dateModule  = require('../modules/dates'),
        swapiModule = require('../modules/swapi');


describe('TDD Tutorial --> ', () => {

    describe('Date module --> ', () => {
        let sandbox,
            getFormattedDateSpy;
        before(() => {
            sandbox = sinon.createSandbox();

            getFormattedDateSpy = sandbox.spy(dateModule, 'getFormattedDate');
        })

        after(() => {
            sandbox.restore();
        })

        it('Should load our date module', () => {
            try{
                const dateModule = require('../modules/dates');
                expect(dateModule).to.be.an('object')
            } catch(exception){
                assert.fail(exception);
            }

        });

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

        it('Should throw an exception if the parameter given is not of type Date', () => {
            //setup
            const date = new Date();
            dateModule.getFormattedDate(date);

            assert(getFormattedDateSpy.calledWithExactly(date), 'Should have been called with only one parameter of date')
        })
    })

    describe('Swapi module --> ', () => {
        let sandbox,
            loggerSpy;
        before(() => {
            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
            sandbox = sinon.createSandbox();

            loggerSpy = sandbox.spy(console, 'log');
        })

        after(() => {
            sandbox.restore();
        })

        it('Should log the URL when a get request is made to SWAPI', () => {
            const query = {
                platform: 'planets',
                id: 2
            }

            const url = swapiModule.buildUrl(query);

            try{
                swapiModule.get(url);
            } catch(exception){
                assert.fail(`Exception : ${exception}`);
            }

            assert(loggerSpy.calledOnce, 'Failed because the logger functionality was not called');
        });
    })
})

```
If you run our test now you will see a failing message : `AssertionError: Failed because the logger functionality was not called`  
To make our test pass we need to add our logger.  
Lets add this line of code to the top of our swapi.get method  
```
get: (url) => {
   console.log(url);
   ...
```
Run our test again and you will see it pass.  
We used sinon spy **calledOnce** to make sure our method was called one time inside our get method.  
We are now confident we covered our requirement of logging each url reqeusted during a *get* call to our SWAPI api.

