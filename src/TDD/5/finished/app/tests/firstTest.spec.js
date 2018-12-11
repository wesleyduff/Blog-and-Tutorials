const   chai = require('chai'),
        expect = chai.expect,
        assert = chai.assert;

describe('TDD Tutorial - session 2 --> ', () => {

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

})