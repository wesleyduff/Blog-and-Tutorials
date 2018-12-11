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
            const dateModule = require('../modules/dates');
            const returnedValue = dateModule.getFormattedDate(new Date());

            expect(returnedValue).to.be.a('string');
        } catch(exception){
            assert.fail(exception)
        }
    })

})