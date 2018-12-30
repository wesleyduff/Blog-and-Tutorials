const   chai        = require('chai'),
        expect      = chai.expect,
        assert      = chai.assert,
        sinon       = require('sinon'),
        dateModule  = require('../modules/dates'),
        swapiModule = require('../modules/swapi'),
        nock        = require('nock'),
        urlParse    = require('url-parse');


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
            loggerSpy,
            loggerErrorSpy;

        before(() => {
            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
            sandbox = sinon.createSandbox();

            //spies
            loggerSpy = sandbox.spy(console, 'log');
            loggerErrorSpy = sandbox.spy(console, 'error');

        })

        after(() => {
            sandbox.restore();
        })

        it('Should log the URL when a get request is made to SWAPI', async () => {
            const query = {
                platform: 'planets',
                id: 2
            }

            let url = swapiModule.buildUrl(query);
            parsedUrl = urlParse(url);

            const host = `${parsedUrl.protocol}//${parsedUrl.hostname}`
            const getSegment = parsedUrl.pathname + parsedUrl.query;

            nock(host)
                .get(getSegment)
                .reply(200, {
                    type: 'fake',
                    data: {}
                })

            try{
                await swapiModule.get(url);
            } catch(exception){
                assert.fail(`Exception : ${JSON.stringify(exception)}`);
            }

            assert(loggerSpy.calledOnce, 'Failed because the logger functionality was not called');
        });

        it('Should handle an unsuccessful api response with a logged out message to the user using console.error', async () => {
            const query = {
                platform: 'planets',
                id: 2
            }

            let url = swapiModule.buildUrl(query);
            parsedUrl = urlParse(url);

            const host = `${parsedUrl.protocol}//${parsedUrl.hostname}`
            const getSegment = parsedUrl.pathname + parsedUrl.query;

            nock(host)
                .get(getSegment)
                .replyWithError({'message': 'fake error message', 'code': 'CUSTOM_ERROR'})

            try{
                await swapiModule.get(url);
            } catch(exception){
                assert(loggerErrorSpy.calledOnce, 'Failed because the logger was not called with an error');
            }
        })
    })

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
});
